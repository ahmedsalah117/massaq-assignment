"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { CommentType } from "@/types";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { t } from "i18next";

let numOfRenders = 0;

export default function Comments() {
  const [allComments, setAllComments] = useState<CommentType[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllPagesLoaded, setIsAllPagesLoaded] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!comment) {
      setError("Comment is required");
      return;
    }

    try {
      const response = await axios(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { commentBody: comment, userId: 1 }
      });

      if (response.status === 200 && response.data.status === 201) {
        toast("Comment submitted successfully!", {
          type: "success"
        });
      }
    } catch (error) {
      toast("Something went wrong while submitting the comment. Please try again later", {
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }

    setIsSubmitting(false);

    setComment("");
    setError("");
  };

  async function getAllComments(pageNumber: number) {
    try {
      setIsLoading(true);
      const response = await axios(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/en/api/comments?pageNum=${pageNumber}`);
      if (response.status === 200 && response.data) {
        setAllComments((prevComments) => {
          return [...prevComments, ...response.data.comments];
        });
        if (response.data.loadedAllComments) {
          setIsAllPagesLoaded(true);
        }
      }
    } catch (error) {
      toast("Something went wrong while loading the comments. Please try reloading the page", {
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleLoadMoreComments() {
    getAllComments(pageNumber + 1);
    setPageNumber((prevNumber) => prevNumber + 1);
  }
  useEffect(() => {
    if (numOfRenders === 0) {
      getAllComments(1);
      numOfRenders++;
    }
  }, []);

  return (
    <main>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
        <div className="mx-auto max-w-[85%] px-4">
          <div className="mb-6 flex items-center justify-between">
            <Button
              variant={"outline"}
              className="rounded-full hover:bg-black hover:text-white"
            >
              <Link
                className="text-lg font-bold"
                href="/"
              >
                Home
              </Link>
            </Button>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">
              Total Comments:{allComments.length}
            </h2>
          </div>
          <form
            onSubmit={onSubmit}
            className="mb-6"
          >
            <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
              <label
                htmlFor="comment"
                className="sr-only"
              >
                comment
              </label>
              <textarea
                id="comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
                rows={6}
                className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              />
              {error && <p className="text-sm font-bold italic text-red-500">{error}</p>}
            </div>
            <div className="flex justify-end">
              <Button
                variant={"outline"}
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-black text-white dark:bg-white dark:text-black"
              >
                {isSubmitting ? "submitting..." : "submit comment"}
              </Button>
            </div>
          </form>
          {/* Displaying all comments */}
          <div className="flex flex-wrap justify-between gap-5">
            {isLoading ? <p className="text-3 flex h-full w-full items-center justify-center">Loading...</p> : ""}
            {allComments.map((comment) => (
              <article
                key={comment?.id}
                className="rounded-xl border bg-white p-6 text-center text-base shadow-md dark:bg-gray-900"
              >
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                      By: {comment?.user?.fullName}
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">{comment?.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            {!isAllPagesLoaded && (
              <Button
                onClick={handleLoadMoreComments}
                variant={"outline"}
                className="rounded-full bg-black text-white dark:bg-white dark:text-black"
                size={"lg"}
              >
                Load more comments
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

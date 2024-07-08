import React from "react";
import { Button } from "./ui/button";
import { PiChatDotsThin } from "react-icons/pi";
import CarouselComponent from "./CarouselComponent";

const TestimonialsSection = () => {
  return (
    <div className="dark:text-white">
      <div className="flex justify-center">
        <Button
          variant={"outline"}
          className="flex items-center gap-2 rounded-full bg-white text-black"
        >
          <PiChatDotsThin />
          Testimonials
        </Button>
      </div>
      <h3 className="mt-4 text-center text-4xl font-bold">What are people saying</h3>
      <p className="mt-3 text-center text-sm">
        &quot;Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing
        the best [products/
        <br />
        services offered]. Read what our clients have to say about their experience with us.
      </p>

      <div className="mt-8 flex justify-center">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default TestimonialsSection;

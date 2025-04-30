import React from "react";
import Card from "../ui/card";
import TestimonialsCard from "./testimonials-card";
import { TestimonialsCarousel } from "./testimonials-carousel";

const items = [
  <TestimonialsCard key={1} />,
  <TestimonialsCard key={2} />,
  <TestimonialsCard key={3} />,
  <TestimonialsCard key={4} />,
  <TestimonialsCard key={5} />,
  <TestimonialsCard key={6} />,
];
export default function Testimonials() {
  return (
    <Card variant="dark" className="container mx-auto my-4">
      <TestimonialsCarousel items={items} />
    </Card>
  );
}

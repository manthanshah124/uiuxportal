import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          UI/UX Website Generator
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create stunning UI/UX designs with AI assistance
        </p>
        <div className="flex gap-4 items-center justify-center">
          <Button size="lg">Start Designing</Button>
          <UserButton />
        </div>
      </div>
    </div>
  );
}

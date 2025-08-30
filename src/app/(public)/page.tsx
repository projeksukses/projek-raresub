import { Button } from "@/components";

export default function IndexPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Hi!</h1>
      <p>Ini halaman Home</p>
      <div className="flex gap-4 mt-4 items-center">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  );
}
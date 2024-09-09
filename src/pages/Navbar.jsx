import Button from "@/components/Button-login";

export default function Navbar() {
  return (
    <nav className="h-12 w-72 lg:w-[40%] lg:inset-x-[30%] z-10 fixed top-5 inset-x-0 mx-auto rounded-full bg-white border-2 border-[#9CFF2E]">
      <div className="flex justify-between mt-1.5 mx-5 ">
        <a href="" className="font-bold text-lg">
          Journey<span className="font-light">jot</span>
        </a>
        <div className="mt-0.5">
          <Button />
        </div>
      </div>
    </nav>
  );
}

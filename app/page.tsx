import { LoginBtn } from "@/components/auth/login-btn";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Web 2.0 Auth
        </h1>
        <div>
          <LoginBtn>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginBtn>
        </div>
      </div>
    </main>
  );
}

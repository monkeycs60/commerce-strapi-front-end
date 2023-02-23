import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage after 2 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2000);

    // Cancel the timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the homepage in 2 seconds...</p>
    </div>
  );
}

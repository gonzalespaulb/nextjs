import { useRouter } from "next/router";

const Page2 = () => {

    const router = useRouter();

  return (
    <div>
      <h1>Welcome to Page 2</h1>
      <button onClick={() => router.push("/Container/Page1")}>Go to 1</button>
    </div>
  );
};

export default Page2;
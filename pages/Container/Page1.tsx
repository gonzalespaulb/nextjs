import { useRouter } from "next/router";

const Page1 = () => {

const router = useRouter();

  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <button onClick={() => router.push("/Container/Page2")}>Go to 2</button>
    </div>
  );
};

export default Page1;

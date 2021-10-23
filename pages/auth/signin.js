import{ getProviders, signIn as signIntoProvider} from "next-auth/react";

function signIn({providers}) {
  return (
    <>
      <h1> sign in pages</h1>
    </>
  );
}

export async function getServerSideProps(){
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signIn;
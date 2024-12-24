import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import PageLayout from "~/layouts/PageLayout";

export const loader: LoaderFunction = async ({ params, request }) => {
  return params;
};
const food = () => {
  const data = useLoaderData<{ id: number }>();
  console.log(data);
  return (
    <PageLayout>
      <main className="container flex items-center justify-cented]d3 h-screen bg-slate-500">
        <div>ini halaman {data.id}</div>
      </main>
    </PageLayout>
  );
};

export default food;

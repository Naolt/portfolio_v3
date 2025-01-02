import { ServiceType } from "@/sanity/schemaTypes/service-section";
import { ServiceCard } from "./service-card";
import { client } from "@/sanity/lib/client";

const SERVICE_QUERY = `*[
  _type == "myService"
]`;

const options = { next: { revalidate: 30 } };

export async function MyService() {
  const services = await client.fetch<ServiceType[]>(
    SERVICE_QUERY,
    {},
    options
  );

  return (
    <section
      className="w-full max-w-screen-xl mx-auto pt-32 grid grid-cols-12"
      id="service"
    >
      <header className="col-span-full space-y-4">
        <h1 className="text-3xl font-semibold">My Service</h1>
        <p className="text-zinc-400">
          Here’s how I can help bring your ideas to life
        </p>
      </header>
      <div className="col-span-full">
        <ServiceCard services={services} />
      </div>
    </section>
  );
}

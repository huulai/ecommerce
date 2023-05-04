import Image from 'next/image';
import { gql } from '../data-access/graphql-client';

export default async function Index() {
  const result = await gql.GetUsers();

  console.log(
    result.users.map((user) => ({ username: user.name, email: user.email }))
  );
  return result.users.map((user) => (
    <div key={user.id}>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <Image
          className="w-24 h-24"
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I have seen scale on
              large teams. It’s easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  ));
}

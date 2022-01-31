import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { IoMdLogIn } from "react-icons/io";

import styles from "./styles.module.scss";

export const Login: React.FC = () => {
  const { data: session } = useSession();
  if (session) toast.success("Login efetuado com sucesso");
  return (
    <div className={styles.container}>
      {session ? (
        <button onClick={() => signOut()} className={styles.singout}>
          <img src={`${session.user?.image}`} alt="" />
          <p>{session.user?.name}</p>
          <IoMdLogIn />
        </button>
      ) : (
        <button onClick={() => signIn()} className={styles.singin}>
          <p>singIn</p>
        </button>
      )}
    </div>
  );
};

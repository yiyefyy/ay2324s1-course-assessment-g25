import Image from "next/image";
import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.loading}>
        <div className='w-5/12 h-1/4'>
          <Image src="https://liveblocks.io/loading.svg" alt="Loading" width="100" height="100"/>
        </div>
    </div>
  );
}

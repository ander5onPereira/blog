import "../styles/index.css";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import DropdownMenu from "@/components/DrowpdownMenu";

import { PostProvider } from "@/contexts/PostContext";
import { GoBack, Header, Menu } from "@/functions/headerOption";
import { ToastProvider } from "@/contexts/useToast";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { title } = router.query;
  const isVisibleGoBack = GoBack(router.pathname);
  const isVisibleMenu = Menu(router.pathname);
  const isVisibleHeader = Header(router.pathname);

  const handlerGoBlack = () => {
    router.back();
  };
  return (
    <ToastProvider>
      <PostProvider>
        <main className="w-full h-full overflow-y-auto flex flex-col mx-auto pb-20">
          {isVisibleHeader && (
            <div className=" w-full h-14 justify-between items-center flex flex-row bg-violet-800">
              <div className=" h-full w-full flex items-center pl-4">
                {isVisibleGoBack && (
                  <button onClick={handlerGoBlack}>
                    <IoIosArrowBack fontSize="28" color="#fff" />
                  </button>
                )}
              </div>
              <div className="h-full w-full flex justify-center items-center">
                <h1 className="text-white text-lg font-medium">
                  {title || "Blog"}
                </h1>
              </div>
              <div className="h-full w-full flex justify-end items-center pr-4">
                {isVisibleMenu && <DropdownMenu />}
              </div>
            </div>
          )}
          <Component {...pageProps} />
        </main>
      </PostProvider>
    </ToastProvider>
  );
}

export default MyApp;

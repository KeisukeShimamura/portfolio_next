import { useInView } from "react-intersection-observer";

type Props = {
  children: any;
};

export const FadeIn = ({ children }: Props) => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "opacity-100" : "opacity-0 translate-y-[50%]"
      } duration-[1s]`}
    >
      {children}
    </div>
  );
};

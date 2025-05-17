import Image from "next/image";

const Clouds = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden ">
      <div className="absolute top-10 left-[-200px] animate-cloudMoveSlow">
        <Image src="/clouds/cloud1.png" alt="cloud" width={150} height={100} />
      </div>

      <div className="absolute top-32 left-[-300px] animate-cloudMoveFast">
        <Image src="/clouds/cloud2.png" alt="cloud" width={200} height={120} />
      </div>
    </div>
  );
};

export default Clouds;

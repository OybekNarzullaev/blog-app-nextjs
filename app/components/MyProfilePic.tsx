import Image from "next/image";

const MyProfilePic = () => {
  return (
    <section className="flex justify-center m-5">
      <Image
        src="/images/profile.jpg"
        className="rounded-full border-slate-400 border-4 object-cover"
        alt="Oybek"
        height={200}
        width={200}
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;

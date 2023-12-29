import {
  IconEmail,
  IconFacebook,
  IconGitlab,
  IconGoogle,
  IconHambergerButton,
  IconLock,
  IconStar,
  IconX,
  ImageBackgroundLoginBossWorkSpace,
  ImageBackgroundLoginLayer1,
  ImageBackgroundLoginLayer2,
  ImageBackgroundLoginLight,
} from "@/assets";
import {
  Divider,
  Input,
  LoginButton,
  LogoHeader,
  OAuthButton,
  RegisterButton,
} from "@/components";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import StickyLoop from "./StickyLoop";
import Light from "./Light";

const LoginPage = () => {
  return (
    <div className="h-screen p-[20px]">
      <div className="absolute top-0 right-0 p-5 hidden lg:block">
        <StickyLoop />
      </div>
      <div className="p-[10px] border-[1px] rounded-3xl h-full border-natural75  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="h-[calc(100vh-60px)] relative hidden lg:block">
            <LogoHeader />
            <Image
              src={ImageBackgroundLoginLayer1}
              alt="background-login"
              draggable="false"
              style={{
                position: "absolute",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: 16,
                zIndex: 1,
              }}
              priority
              quality={100}
            />
            <Image
              src={ImageBackgroundLoginLayer2}
              draggable="false"
              alt="background-login"
              style={{
                position: "absolute",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: 16,
                zIndex: 2,
              }}
              priority
              quality={100}
            />
            <div className="flex justify-center items-center w-full h-full">
              <Light />
              <Image
                src={ImageBackgroundLoginBossWorkSpace}
                alt="background-login"
                draggable="false"
                style={{
                  position: "absolute",
                  objectFit: "contain",
                  width: "480px",
                  height: "500px",
                  objectPosition: "0 60%",
                  zIndex: 4,
                }}
                quality={100}
              />
            </div>
            <div className="bg-natural75 h-[32px] w-full absolute z-[3] bottom-[47px] flex flex-row item-center justify-center">
              <Marquee speed={20}>
                <p className="text-natural05 uppercase text-xs mx-[48px] font-bold">
                  Secue. fun. simple. earn $naka AND enjoy
                </p>
                <IconStar />
                <p className="text-natural05 uppercase text-xs mx-[48px] font-bold">
                  Secue. fun. simple. earn $naka AND enjoy
                </p>
                <IconStar />
                <p className="text-natural05 uppercase text-xs mx-[48px] font-bold">
                  Secue. fun. simple. earn $naka AND enjoy
                </p>
                <IconStar />
              </Marquee>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[333px]">
              <div>
                <div className="flex flex-row items-center justify-between pb-[10px] text-natural03">
                  <p className="font-[18px] font-bold uppercase">Log in</p>
                  <IconHambergerButton />
                </div>
                <Divider />
                <div>
                  <Input
                    label={"Email address"}
                    leftIcon={<IconEmail />}
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="mb-[32px]">
                  <Input
                    label="Password"
                    leftIcon={<IconLock />}
                    placeholder="Password"
                    type="password"
                    helperText="A number or symbol, atleast 6 characters"
                    showPasswordToggle
                  />
                </div>
                <div className="flex flex-row justify-between mb-[19px] ">
                  <RegisterButton />
                  <LoginButton />
                </div>
                <div className="flex justify-end text-[10px] text-natural05 uppercase">
                  <a href="#forgot-password">Forgot password?</a>
                </div>
                <div className="flex flex-row items-center">
                  <p className="text-[10px] font-700 text-natural05 inline w-32 uppercase">
                    OR Log in with
                  </p>
                  <Divider className="w-full" />
                </div>
                <div className="flex flex-row justify-between mt-[40px]">
                  <OAuthButton icon={<IconFacebook />} />
                  <OAuthButton icon={<IconGoogle />} />
                  <OAuthButton icon={<IconX />} />
                  <OAuthButton icon={<IconGitlab />} />
                </div>
              </div>
            </div>
            <div className="text-[10px] text-natural07 text-center font-bold uppercase absolute bottom-10">
              <p>Copyright 2022 © Nakamoto Games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

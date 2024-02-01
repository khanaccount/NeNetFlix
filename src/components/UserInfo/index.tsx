import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import userSvg from "../../../public/assets/auth/user.svg";

export default async function UserInfo() {
    const session = await getServerSession(authOptions);
    return (
        <>
            <p>{session?.user?.name}</p>
            <Image
                src={userSvg && (session?.user?.image as string)}
                alt="userImg"
                width={30}
                height={30}
            />
        </>
    );
}

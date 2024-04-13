import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/',
    '/upcoming',
    '/meeting(.*)',
    '/previous',
    '/recordings',
    '/personal-room',],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

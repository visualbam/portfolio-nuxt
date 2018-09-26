export default function ({ route, redirect }) {
    if (route.fullPath === "/blog") {
        return redirect('/blog/ui-ux');
    }
}
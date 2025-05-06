import type { DirectiveBinding } from "vue";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        if (typeof binding.value === 'string') {
            el.dataset.src = binding.value;
        }
        const { observer }: any = useIntersectionObserver();
        observer.observe(el);
    },
    unmounted(el: any) {
        // 当元素卸载时，取消观察
        const { observer }: any = useIntersectionObserver();
        if (observer) {
            observer.unobserve(el);
        }
    }
}
import api from "../../utils/api";
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}

export function reset() {
    return { type: RESET }
}
export const foo = () => ({
    type: "FOO",
    payload: api.get("http://api.douban.com/v2/movie/top250"),
});
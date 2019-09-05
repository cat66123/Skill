import { createGlobalStyle } from "styled-components";

export const GlobalStyleFont = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1567653039769'); /* IE9 */
    src: url('./iconfont.eot?t=1567653039769#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALEAAsAAAAABngAAAJ2AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBBIEbATYCJAMICwYABCAFhG0HMBvBBRHVkwlkXx2Yh0S7k81JXviEuH6owq+Q7nPwRGuvb3b2fjaECtElEgGEChdBsQPWqOpaRyCBZPX5vpv1bI2KUGVIngd/yzN+YKcvTW+0xUampq7Q2AhXLqEB4BP3Tv9vAAUy33mXyxyTJnUBxoEU0N4YRVYkkTeMXfACH0OAEJIpRGrqWnpwWOxVAsjK4vwkrhDGYlnOIQQaDlrkLB7OHDOvcJyJvi9/qMWBwVPsho652hkqvuc5BbrtbzMSEERAQMc9QIFCwIL0NKbbUIQxlJC0JR2OVSvwPc/3AytyVBPC/jq7OgyARCh+JoknfVReA4CF0ZAJVEwKgIbZk6ffvet7/77/7dveN2/GXGVPLMxf+O7d6Oyl7VvHE+Yu79w98XChvn2nNxxBoLxJBdBpb9is4cajffPoke47Ex4+OjB75vEjsw8EaPIGqCIjfql0yx/wr+hLnUQAgdInt41Hlvx3oRaAj5evPoyC/hXLMC+4M3gE/pRkYI81ZLbFWE3SmDdkonfQFEII4IP9MXybqo+/rbzgiL85bxBJmVNxhgSSll4Ij1CKEcBRjhAKqD8eSixbKGKDgXwOAIQoHsIQwQsoUbwmLf0rPBL4hwBRogihT2IvDCVbtNVXK3rDRMOf1lEudm3m49o75nz0mpdFzDc0rTGqQlnOdbigS2xJn7k2Y2KVk1rwHI5DKKpsGC0sZrEpCm56UxjldN5VK3rDRMOf1lEuDgabr3z+jjkfvXZ01fnf0LSOT1UoB5Cd+hrU9SivpM9cmzGxykktmIfjEIrN8zaMFpYJydgUTj8eqg7ba8+/OwSEONtgbs4sJZAkpyzOAQAA') format('woff2'),
    url('./iconfont.woff?t=1567653039769') format('woff'),
    url('./iconfont.ttf?t=1567653039769') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1567653039769#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

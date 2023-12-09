import React from "react";
import Reveal from "../Reveal/Reveal";

const logos = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEX///+pF/6jAPrQl/GpFv//9f+jJ+b//v+hAPelAP3///3/+P///P+oEP//+v+bAOudAPCZAObz2/f44/v97P2vU+KhKeLmwvL75/zoxfGoQuH/8f6cGOTetfCbCeasSOSyW+KjM+KoPeO6a+XcsezszfXOlunJnOPAfOTHiuWzXuPhu/DOl+e4Zue+c+fVperx1vjDg+itT+PMduq/deOkRNXbre/p0vK1AAAG1UlEQVR4nO2dC1PiMBDHC5RXRcpDBXwgPkAUVPQ4vv9Hu2zSFtFDSpvtbjv7n5sbZ25u2p//pJPdbDaOIxKJRCKRSCQSiUQikUgkEolEIpFIJBKJRInlUb8AvrxiQz7Ne4W2se5UGv75TZv6PTBVKbunjfFzz/HCwVo0QxVhyXXL/mRxUjg2o0q5BFJG1p77TvEcNB4GjGX/ZdGifh/7CjwMjbyoaCO9Aln5ldAY+TpoF2qw7hJqyM7dcqj/rRiYPwi1kd3XUavAhADZVEaeUb+bHf2f0MzIh1HdiZYBdeIXTax9hMbI+/fIyNwO2V8IzYx8m9ZzjOccIDRGXr5fUb9lGh0iVItWtTKfrxxtZB69PEioIZWRm9DIvFHGIdQzsnGtjcyfYhJqI/3bTZX6fY9XbMLAyI8e9Rsfq2MIgVEZeVOF6AP+cy6m5HGEgZHPeTLyaEJj5LlOehTTQ0X4JemRAyUgDIz8lvRg62dSQg3Zqc1CI9kCpiEMYuUB8+xVGkLXLOguZsPCehgaqWJlao79Sk9Y0iHWxXK43cViZagVQm3k+GHKMtNhibC0TXpwWwjYI1RSRr5NqYm+yyqh/rTeM0t62CUs6QXdeB0ayWH/wzohQEKszMZIDELzaZ2veKQhcQhhRpY7n48n1HgOHiFIzciPFbmP0R4whiB79XljsleeQ8Q6uus0XUzIIOlB9lX1nNbowS+fIjKW3LJOehAB6t/scHnRwWUMkh4e2VBVRr7iGgkzcrJo02x+eOah/RkYiTojVaxMV7IDT20PXnzMLyukIbtQ6ZHxV0c/DQI7eG7/+brRRB2sp527GW2BQH0xUUaiDtbvlR7ZO9pTRiJ/dQgrPczv8+Tm3FeDFY8SjHyYtogWAiYL0fvANzJIemSNFz2z+vjpRws6DFZIQ64pkx4KtDdXRiKwbSGJS3bUE682lz7mytyFWHm9ogDcpj5Xa9wZWQorPYiiD/juXL3f44ZYJQaVHtP1uIy5aoVPK2mlhxpAZ9pINEQdYt2fEGc8pm9d3BCrRlquY2LlpztEI4GQ2ET1+Dpi0oPYw62GyzucpMcpB0IziNqjV4wZyYIwkkl6FJBQJwPMj+3BxG9aXbWyINzV8PnC5oKOIaGKlRcqVrYFyZHQJD1qDTsLOo6ERibpkZ6RIeF2AWIl6cGQ8Kuqj59pQyzehGDnaj5OZSRvQsN49XibYkZyJwy2lVbzblIj2ROGqr5fJgux8kLoeU59+jZOsDLPC6HRmTKysITBNm/1T6OIhNEaANZyRfVQzUNYjxd1HoKH/UrC4DgHhMq+9uAlcYIjB4TOcJYmJGZMaMosW4OU+SnGhMBnIcfIlRC24lujBwvpRaaEsGnzdN+xUWrEkFBXUtjbr2FHCHhW99yYEWr71klCiHwQQhFD0jAwH4QqlL+2lCVlR6gDo80lRukCOWF4QGSFVRBGTqgL3kwtGAIeB0IHu56PllDZ17a0PbFXeh+fpFRBD09dV4tHpyvd/7ZJAHWR+2LSbaLWRIW10TSAfdghxKwYhoMKQSdDAtUH2IdNoMOG7kaZ4QjV3T31X/1ZrYM5+9yoo2jW0uWlmdgXHPrK/qhQmJZAnX1hkxuKw1B1K2mJXwGVfTcnTrZsXvjnbIl77tKNmk1l31DLbI0l3uOMyQeHoEkWaJ4pBUZbWRs+aPoW1XRnbt8q0c7mMXxN/9bYR7E8q25u0Su5u1CSn/lhJ9NRP0WFQTw8umr89FUicfj00RiKDj2BfekqfQ7zNf3weBPB2sVUa2HiqdkHzYiJQltnYT8puIMH50X1MUOiHlkeYl8MNzgqOiLuj4XU28T9ftyX7qQIWn8auGXB2EfevQWHzzSN9Dz6FtkYhPqSDFqsL8Lo9bWNaznIMqG+dYjX9VE2CaN+QtRQO7JGCB1o6FoJ/SJrvS8bNabNzG0Q6pZeNGmJGLLRg5Z3L/qUhOSnzA8rZS9o+k4BB5Wc0A0uaOF+hVmKnuymYwdzvqSEUdcVj//tM4nuRmj4pl0wb7RAxxKSdT9KrGPvKKHsYJVMR90z04wuDsyR4t8VpNMSrWg/LDcmxr7vibwbYFLFIjxtBtUS1G+bRIcJo66cOdUBQpdhWuJI/U4IWaVouz2n2k/oknY4tqf995CauFYtPD2WF3PE1r67ZKNO46A8D9L/3wdsusWHYLnm+0kIK+vPTf5n31Y/7uUek1RLIGrnbvXg5g1ud+GkU0S4c3tKkaQJ3RLDG3CsyDOEYN8bz+uo0koTBtUSRZp6O6o0ukxvE7Mjz3lcDrc9rgvro0gkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIhT9A9N7ip72wlX9AAAAAElFTkSuQmCC",
];
function Experience() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center w-full py-16 px-10 font-poppins">
      <Reveal>
        <h2 className="font-semibold text-5xl text-center">Experience</h2>
      </Reveal>
      <div className="grid grid-cols-2 w-full">
        <div className="">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="rounded-full p-2 bg-white shadow-md inline-block"
            >
              <img src={logo} alt="" className="rounded-full w-20" />
            </div>
          ))}
        </div>
        <div className="">Hello</div>
      </div>
    </div>
  );
}

export default Experience;

export const content = `
### Premise

I came across this interesting infinite product on _Threads_ which illustrates the indispensable mathematical skill of having good intuition.

The infinite product in question is 

$$
  \\begin{aligned}
      P&=\\prod\\limits_{n=1}^\\infty \\frac{(2n)^{1/2n}}{(2n+1)^{1/(2n+1)}}. \\\\
  \\end{aligned}
$$

### Solution

The first few steps are routine. First we take the natural log of $P$.

$$
\\begin{aligned}
     \\ln P &= \\sum\\limits_{n=1}^\\infty \\left(\\frac{\\ln (2n)}{2n}-\\frac{\\ln(2n+1)}{2n+1} \\right)
    \\\\ &= \\frac{\\ln 2}{2}-\\frac{\\ln 3}{3}+\\frac{\\ln 4}{4}-\\frac{\\ln 5}{5}+\\dots \\\\
    &= \\sum\\limits_{n=2}^\\infty (-1)^n \\ \\frac{\\ln n}{n}
\\end{aligned}
$$


Now we invoke something rather unobvious. The Dirichlet eta function, defined as $$\\eta(s) = \\sum\\limits_{n=1}^\\infty \\frac{(-1)^{n-1}}{n^s},$$ has derivative $$\\eta'(s) = -\\sum\\limits_{n=1}^\\infty \\frac{(-1)^{n-1} \\ln n}{n^s}.$$ 

Here we have that 
$$
\\ln P =\\eta'(1).
$$

Observe that we have 
$$
\\eta'(s) = 2^{1-s} \\log 2\\zeta(s)+(1-2^{1-s})\\zeta'(s),
$$

where $\\zeta(s)$ is the Riemann zeta function. In particular note that the Laurent series for $\\zeta(s)$ is $\\zeta(s) = \\frac{1}{s-1}+\\gamma + O(s-1),$ where $\\gamma$ is the Euler-Mascheroni constant, and the Laurent series for $2^{1-s}$ is $1-(s-1)\\ln 2 + O((s-1)^2).$

Therefore $\\eta'(1) = \\ln 2^{(\\gamma-\\frac{1}{2} \\ln 2)}$, or 
$$
P=2^{\\gamma - \\frac{1}{2} \\ln 2}.
$$
`




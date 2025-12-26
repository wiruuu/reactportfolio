export const content = `

### Premise
In this section we aim to evaluate infinite series of the form $$$$\\sum\\limits_{n=1}^\\infty \\frac{\\sin^\\alpha(n)}{n^\\alpha}$$$$ where $$\\alpha$$ is an integer. 

### Case 1: $\\alpha=1$

First let's discuss convergence for $$\\alpha=1$$. We can establish an upper bound by using Abel summation. Write 
$$$$
S_n=\\sum_{k=1}^n \\sin k
$$$$ 
and note that 
$$$$
\\sum_{k=1}^n\\frac{S_k-S_{k-1}}{k}=\\sum\\limits_{k=1}^n \\frac{\\sin(k)}{k}
$$$$ 
in which the L.H.S. sort of telescopes: we can represent it as $$$$\\frac{S_n}{n}+\\sum_{k=1}^{n-1}\\frac{S_k}{k(k+1)}.$$$$

But note that $$\\sum\\limits_{k=1}^n \\sin(k) = \\Im\\left(\\sum\\limits_{k=1}^n \\exp(ik)\\right)$$ which is a geometric series sum that equals $$\\Im(\\frac{e^i(1-e^{in})}{1-e^i})$$, meaning that $$$$|S_n| \\leq \\left|\\frac{1-\\exp(in)}{1-\\exp(i)}\\right|\\leq\\left|\\frac{2}{1-\\exp(i)}\\right|=\\csc(0.5).$$$$

A bound for $$|S_n|$$ is sufficient to demonstrate convergence. Since $$S_k \\leq S_n$$ for $$k\\leq n$$, we see that 
$$
\\begin{aligned}\\left|\\sum\\limits_{k=1}^n \\frac{\\sin(k)}{k} \\right| \\leq \\csc(0.5) \\left(\\frac{1}{n} + \\sum_{k=1}^{n-1} \\frac{1}{k(k+1)} \\right)=\\csc(0.5). \\end{aligned}
$$

This is not a good bound since $$\\csc(0.5) \\approx 2.09$$ and numerical evaluation gives $$1.07.$$

Now we evaluate the sum's exact value. Recall that the complex Fourier series of a function $$f(x)$$ is given by $$$$f(x)=\\sum_{n=-\\infty}^\\infty C_n \\exp(-inx)$$$$ where $$$$C_n = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(x) \\exp(-inx)\\ dx.$$$$ 

Evaluation on $$f(x)=x$$ yields $$$$x=-2\\sum_{n=1}^\\infty \\frac{(-1)^n}{n}\\sin(nx).$$$$ Substitute $$x=\\pi-1$$ (valid as $$\\pi-1 \\in [-\\pi, \\pi]$$) to obtain 
$$
\\begin{aligned}
    \\pi-1&=-2\\sum\\limits_{n=1}^\\infty \\frac{(-1)^n}{n} \\sin(n\\pi-n)\\\\ &=-2\\sum\\limits_{n=1}^\\infty \\frac{(-1)^n}{n}  \\cdot((-1)^{n+1}\\sin(n)) \\\\&= 2\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n)}{n},
\\end{aligned}
$$

meaning $$$$\\sum_{n=1}^\\infty \\frac{\\sin(n)}{n}=\\frac{\\pi-1}{2}.$$$$

Evidently it is also not hard to show that 
$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n}=\\frac{\\pi-\\theta}{2}
$$

which is important for our future calculations.

Great stuff. Our approach in evaluating $$\\sum\\limits_{n=1}^\\infty \\frac{\\sin^\\alpha(n)}{n^\\alpha}$$ is split into two cases - $$\\alpha$$ being even and $$\\alpha$$ being odd. We first consider the odd case.

### Case 2: $\\alpha >1$, $\\alpha$ odd


`
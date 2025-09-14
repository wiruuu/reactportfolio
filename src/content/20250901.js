export const content = `
 In this series of blog posts we aim to prove some statements regarding infinite series that involve hyperbolic functions. In the following posts regarding these series, there is quite a bit of detail on elliptic functions and Poisson summation which I will just gloss over. I will tackle 1-2 series per blog post.

<h3>Series 1:</h3>

$$
S=\\sum\\limits_{i=1}^\\infty\\frac{1}{\\cosh(\\pi n)}
$$

<InlineMath math="P(X_{n+1}=x_{n+1} \mid X_1=x_1, \dots, X_n=x_n) = P(X_{n+1}=x_{n+1} \mid X_n=x_n)" />

First we note that $\\cosh(\\pi n) = \\frac{e^{\\pi n}+e^{-\\pi n}}{2}$, and thus $\\frac{1}{\\cosh(\\pi n)} = \\frac{2e^{-\\pi n}}{1+e^{-2\\pi n}}.$ Therefore, the required sum is $$\\sum\\limits_{i=1}^\\infty \\frac{2e^{-\\pi n}}{1+e^{-2\\pi n}}.$$

Then note that $\\frac{1}{{1+e^{-2\\pi n}}}=\\frac{1}{{1-(-e^{-2\\pi n})}}$ is a geometric series with expansion $\\frac{1}{{1+e^{-2\\pi n}}} = \\sum\\limits_{k=0}^\\infty (-1)^k e^{-2\\pi nk}$ and so due to Fubini's theorem, we can express $S$ and change sum order to obtain
$$
\\begin{aligned}
	S &= 2\\sum\\limits_{n=1}^\\infty \\sum\\limits_{k=0}^\\infty (-1)^k e^{-\\pi n(2k+1)} \\\\
	&= 2 \\sum\\limits_{k=0}^\\infty (-1)^k \\sum\\limits_{n=1}^\\infty e^{-\\pi n (2k+1)} \\\\
	&= 2 \\sum\\limits_{k=0}^\\infty (-1)^k \\frac{e^{-\\pi(2k+1)}}{1-e^{-\\pi(2k+1)}} 
\\end{aligned}
$$

where we note that the sum indexed by $n$ is a geometric series. Let $x=e^{-\\pi}$. We get $$S=2 \\sum\\limits_{k=0}^\\infty (-1)^k \\frac{x^{2k+1}}{1-x^{2k+1}}. $$

The adept might notice that we are alluding to the Jacobi theta functions $\\vartheta_i(z, x)$ where $z$ is the argument. We take $z=0$ for our purposes here. To abuse notation, we write $$\\vartheta_i(z, x)=\\vartheta_i(0, x)=\\vartheta_i(x).$$

The four Jacobi theta functions, taking the argument $z=0$, are (neatly)
$$
\\begin{aligned}
	\\vartheta_1(x)&=0 \\\\
	\\vartheta_2(x) &= \\sum\\limits_{n \\in \\mathbb{Z}} x^{(n+1/2)^2} \\\\ 
	\\vartheta_3(x)&= \\sum\\limits_{n \\in \\mathbb{Z}} x^{n^2} \\\\
	\\vartheta_4(x)&= \\sum\\limits_{n \\in \\mathbb{Z}} (-1)^n x^{n^2} \\\\	 
\\end{aligned}
$$

Let's consider $\\vartheta_3(x)$. Then $$\\vartheta_3^2(x) = \\sum\\limits_{m, n \\in \\mathbb{Z}} x^{m^2+n^2}.$$ Jacobi, in his work on elliptic and theta functions, showed that this was related to the $s$-squares problem. 

Define the function $r_s(n)$ as the number of integer solutions $(x_1, \\dots, x_s)$ of the equation $$x_1^2+\\dots+x_s^2=n.$$ 

Then, a result of Jacobi shows that we can relate $$\\vartheta^s_3(x)=1+\\sum\\limits_{n=1}^\\infty r_s(n)x^n,$$ or in the case where $s=2$, 
$$
\\vartheta^2_3(x)=\\sum\\limits_{n=0}^\\infty r_2(n)x^n.
$$

The first thing that should come to mind when we see this statement is Jacobi's two-square theorem as the statement above represents the generating function of the two-square theorem. The two-square theorem states that 
$$
r_2(n)=4(d_1(n)-d_3(n)),
$$ 

where $d_i(n)$ is the counting function $$d_i(n) = \\sum\\limits_{d\\mid n,\\ d\\equiv i \\pmod 4} 1.$$

A proof involves Jacobi's triple-product identity. This is the statement that for all $a \\in \\mathbb{C}$, 
$$
\\sum\\limits_{n=-\\infty}^\\infty a^n x^{n^2} = \\prod\\limits_{n\\geq 1}(1-x^{2n})(1+ax^{2n-1})(1+a^{-1}x^{2n-1})
$$

A proof usually involves the unique factorisation of $\\mathbb{Z}[i]$. However I did come across a variant of this brute force proof online which I found elegant. Substitute $x$ for $x^2$ and replace $a$ with $-a^2x$. Thus we obtain, multiplying by $a$, 
$$
\\begin{aligned}
& \\ \\ \\ \\ (a - a^{-1}) \\prod_{n \\geq 1} (1 - a^{2}x^{n})(1 - a^{-2}x^{n})(1 - x^{n}) \\  \\ \\ \\ (1) \\\\ &= \\sum_{-\\infty}^{\\infty} (-1)^n a^{2n+1} x^{(n^{2}+n)/2} \\\\
\\end{aligned}
$$
This is a telescoping sum that can be represented as 
$$
\\begin{aligned}
&\\ \\ \\ \\ \\sum_{-\\infty}^{\\infty} a^{4n+1} x^{2n^{2}+n} - \\sum_{-\\infty}^{\\infty} a^{4n-1} x^{2n^{2}-n} \\\\
&= a \\prod_{n \\geq 1} (1 + a^{4}x^{4n-1})(1 + a^{-4}x^{4n-3})(1 - x^{4n})- a^{-1} \\prod_{n \\geq 1} (1 + a^{4}x^{4n-3})(1 + a^{-4}x^{4n-1})(1 - x^{4n}). \\ \\ \\ \\ (2)
\\end{aligned}
$$

Taking $\\frac{\\partial}{\\partial a}$ on $(1)$ and $(2)$, we get 
$$
\\begin{aligned} \\prod\\limits_{n\\geq 1}(1-x^n)^3 &= \\prod\\limits_{n\\geq 1} (1+x^{4n-3})(1+x^{4n-1})(1-x^{4n}) \\cdot \\left(1 - 4\\sum\\limits_{n\\geq 1} \\left(\\frac{x^{4n-3}}{1+x^{4n-3}}-\\frac{x^{4n-1}}{1+x^{4n-1}} \\right) \\right)\\\\
&= \\prod\\limits_{n\\geq 1} (1+x^n)^2(1-x^n) \\cdot \\left(1 - 4\\sum\\limits_{n\\geq 1} \\left(\\frac{x^{4n-3}}{1+x^{4n-3}}-\\frac{x^{4n-1}}{1+x^{4n-1}} \\right) \\right).
\\end{aligned}
$$

Notice that if you move the first term on the R.H.S. over to the L.H.S., you obtain 
$$
\\prod\\limits_{n\\geq 1} \\left(\\frac{1-x^n}{1+x^n} \\right)
$$ 

on the left-hand side, which you can invoke the Jacobi triple-product identity to obtain 
$$
\\prod\\limits_{n\\geq 1} \\left(\\frac{1-x^n}{1+x^n} \\right) = \\sum\\limits_{n=-\\infty}^\\infty (-1)^n x^{n^2}.
$$ 

Moving things around and direct simplification yields 
$$
\\begin{aligned}
	\\vartheta_3^2(x) &= \\left(\\sum\\limits_{n=-\\infty}^\\infty x^{n^2} \\right)^2 \\\\
	&= 1+4\\sum\\limits_{n\\geq 1} \\left(\\frac{x^{4n-3}}{1-x^{4n-3}}-\\frac{x^{4n-1}}{1-x^{4n-1}} \\right) \\\\
	&= 1+4\\left(\\frac{x}{1-x}-\\frac{x^3}{1-x^3}+\\frac{x^5}{1-x^5}-\\frac{x^7}{1-x^7}+\\dots \\right).
\\end{aligned}
$$

Evidently so, the sum $$S=\\frac{\\vartheta_3(x)^2-1}{2}.$$ It remains for us to evaluate $\\vartheta_3$ at the special value $e^{-\\pi}$. We defer to the complete elliptic integrals to help us.

Let $k \\in (0, 1)$ be an *elliptic modulus* associated with the *nome* $q$, with $$q = e^{-\\pi K'(x) / K(x)}$$. 

$K$ and $K'$ come from definitions of the complete elliptic integral of the first kind: we have that $$K(k) = \\int_0^{\\pi/2} \\frac{dx}{\\sqrt{1-k^2 \\sin^2x}}$$ and $$K'(k) = K(\\sqrt{1-x^2}).$$

It is known that $$\\vartheta_3(q) = \\sqrt{\\frac{2K(k)}{\\pi}}.$$ We obtain the nice value $k=\\frac{1}{\\sqrt{2}}$ when $q=e^{-\\pi}$. Note it remains for us to evaluate $K(\\frac{1}{\\sqrt{2}})$, which is a famous value of $K(x)$. Nonetheless, substituting $t=\\sin^2 \\theta$ yields 

$$
K\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{1}{2} \\int_0^1 t^{-1/2}(1-t)^{-1/2}(1-t/2)^{-1/2}\\ dt,
$$ 

which is equivalent to the hypergeometric function 
$$
K\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{\\pi}{2} \\ _2F_1(\\frac{1}{2}, \\frac{1}{2};1;\\frac{1}{2}).
$$ 

We can reduce this to a Beta integral and represent this hypergeometric function as $\\frac{\\Gamma(\\frac{1}{4})^2}{2\\pi^{3/2}}$; thus 

$$
K\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{\\Gamma(\\frac{1}{4})^2}{4\\sqrt{\\pi}}.
$$

Substituting back into $\\vartheta_3(e^{-\\pi}) = \\sqrt{\\frac{2K(\\frac{1}{\\sqrt{2}})}{\\pi}}$ and using the Gamma function's reflection identity $$\\Gamma(z)\\Gamma(1-z) = \\pi \\csc(\\pi z)$$ yields 

$$
\\vartheta_3(e^{-\\pi}) = \\frac{\\pi^{1/4}}{\\Gamma(\\frac{3}{4})}.
$$

Finally, employing $S=\\frac{\\vartheta_3(x)^2-1}{2}$ gives us 

$$
S=\\sum\\limits_{i=1}^\\infty\\frac{1}{\\cosh(\\pi n)} = \\frac{1}{2} \\left( \\frac{\\sqrt{\\pi}}{\\Gamma^2(\\frac{3}{4})} -1\\right).
$$

`

// Pi and the AGM

// https://math.stackexchange.com/questions/4192954/closed-form-of-sum-n-1-infty-frac1-sinh-n-pi-in-terms-of-gamma-a?noredirect=1&lq=1

// https://mathoverflow.net/questions/232260/evaluating-an-infinite-sum-related-to-sinh

// https://math.stackexchange.com/questions/2290683/sums-of-the-form-s-k-sum-n-geq-1-frac1-sinh2kn-pi-and-the-residue?noredirect=1&lq=1

// https://math.stackexchange.com/questions/4623620/prove-a-relation-between-theta-functions-and-their-derivatives-to-prove-sum-n?noredirect=1&lq=1

// https://math.stackexchange.com/questions/346713/using-residues-to-evaluate-a-sum-involving-the-square-of-textcsch

// https://math.stackexchange.com/questions/4808868/show-that-sum-n-1-infty-frac1n-cdot-sinhn-pi2-frac23-sum?noredirect=1&lq=1

// https://math.stackexchange.com/questions/907480/sum-the-series-sum-n-1-infty-coth-n-pi-x-x2-cothn-pi-x-n

// https://math.stackexchange.com/questions/4623620/prove-a-relation-between-theta-functions-and-their-derivatives-to-prove-sum-n?noredirect=1&lq=1
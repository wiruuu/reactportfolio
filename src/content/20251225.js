export const content = `

### Premise
In this section we aim to evaluate infinite series of the form $$$$\\sum\\limits_{n=1}^\\infty \\frac{\\sin^\\alpha(n)}{n^\\alpha}$$$$ where $$\\alpha$$ is an integer. 

### Case 1: $\\alpha=1$

First let's discuss convergence for $k=1$. We can establish an upper bound by using Abel summation. Write 
$$
S_n=\\sum_{k=1}^n \\sin k
$$ 

and note that 

$$
\\sum_{k=1}^n\\frac{S_k-S_{k-1}}{k}=\\sum\\limits_{k=1}^n \\frac{\\sin(k)}{k}
$$ 

in which the L.H.S. sort of telescopes: we can represent it as $$\\frac{S_n}{n}+\\sum_{k=1}^{n-1}\\frac{S_k}{k(k+1)}.$$

But note that $\\sum\\limits_{k=1}^n \\sin(k) = \\Im\\left(\\sum\\limits_{k=1}^n \\exp(ik)\\right)$ which is a geometric series sum that equals $\\Im(\\frac{e^i(1-e^{in})}{1-e^i})$, meaning that 
$$
|S_n| \\leq \\left|\\frac{1-\\exp(in)}{1-\\exp(i)}\\right|=\\left|\\frac{2}{1-\\exp(i)}\\right|=\\csc(0.5).
$$

A bound for $|S_n|$ is sufficient to demonstrate convergence. Since $S_k \\leq S_n$ for $k\\leq n$, we see that 

$$
\\left|\\sum\\limits_{k=1}^n \\frac{\\sin(k)}{k} \\right| \\leq \\csc(0.5) \\left(\\frac{1}{n} + \\sum_{k=1}^{n-1} \\frac{1}{k(k+1)} \\right)=\\csc(0.5).
$$

This is not a good bound since $\\csc(0.5) \\approx 2.09$ and numerical evaluation gives $1.07.$

Now we evaluate the sum's exact value. Recall that the complex Fourier series of a function $f(x)$ is given by 
$$
f(x)=\\sum_{n=-\\infty}^\\infty C_n \\exp(-inx)
$$ 

where 

$$
C_n = \\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(x) \\exp(-inx)\\ dx.
$$ 

Evaluation on $f(x)=x$ yields $$x=-2\\sum_{n=1}^\\infty \\frac{(-1)^n}{n}\\sin(nx).$$ Substitute $x=\\pi-1$ (valid as $\\pi-1 \\in [-\\pi, \\pi]$) to obtain 

$$
\\begin{aligned}
    \\pi-1&=-2\\sum\\limits_{n=1}^\\infty \\frac{(-1)^n}{n} \\sin(n\\pi-n)\\\\ &=-2\\sum\\limits_{n=1}^\\infty \\frac{(-1)^n}{n}  \\cdot((-1)^{n+1}\\sin(n)) \\\\&= 2\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n)}{n},
\\end{aligned}
$$

meaning $$\\sum_{n=1}^\\infty \\frac{\\sin(n)}{n}=\\frac{\\pi-1}{2}.$$

Evidently it is also not hard to show that 
$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n}=\\frac{\\pi-\\theta}{2}
$$ 
for $\\theta \\in [0,2\\pi]$; due to periodicity we also have 
$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n}=\\frac{\\pi-(\\theta\\mod 2\\pi)}{2}
$$

Great stuff. Our approach in evaluating $\\sum\\limits_{n=1}^\\infty \\frac{\\sin^\\alpha(n)}{n^\\alpha}$ is split into two cases - $\\alpha$ being even and $\\alpha$ being odd. We first consider the odd case.

### Case 2: $\\alpha>1$, $\\alpha$ odd

Our work here is a lot more tricky as it is really inconvenient for one to directly manipulate a Fourier series to obtain $\\sin^\\alpha(n)$ for $\\alpha>1.$ However we do know formulae for $\\sin^\\alpha(n)$ in terms of $\\sin(\\beta_i n)$ for odd $\\beta_i<\\alpha$  by writing $\\sin(x)=\\frac{e^{ix}-e^{-ix}}{2i}$ and expanding. So it remains for us to find expressions for $$\\sum\\limits_{n=1}^\\infty \\frac{\\sin(\\beta_i n)}{n^\\alpha}$$ where $\\beta_i < \\alpha.$

Consider $\\alpha=3$. By writing $\\sin^3(x)=\\frac{3\\sin x - \\sin(3x)}{4}$, it remains for us to find $$\\sum\\limits_{n=1}^\\infty \\frac{\\sin( n)}{n^3}, \\sum\\limits_{n=1}^\\infty \\frac{\\sin(3n)}{n^3}.$$

The Clausen functions are typically defined as 

$$
\\mathrm{Cl}_n(x)=
\\begin{cases}
S_n(x)=\\displaystyle\\sum_{k=1}^{\\infty}\\frac{\\sin(kx)}{k^{\\,n}}, & n \\ \\text{even}, \\\\
C_n(x)=\\displaystyle\\sum_{k=1}^{\\infty}\\frac{\\cos(kx)}{k^{\\,n}}, & n \\ \\text{odd}.
\\end{cases}
$$


although these functions hold for all $S_z(x)$ and $C_z(x)$ for $z \\in \\mathbb{C}.$ More specifically they are defined on the complex plane with $\\Re(z)>1$ but we can perform analytic continuation on the two functions.

Here we are tasked with finding the values of Clausen functions for odd integer $n$ and to substitute odd integers for $x$.

Closed-from values for $S_n(x)$ are readily available for small values of $n$. Yet note that we can recover the values for the Clausen function from the Bernoulli polynomials $$B_{2n-1}(x) = \\frac{2(-1)^{n}(2n-1)!}{(2\\pi)^{2n-1}} \\sum\\limits_{k=1}^\\infty \\frac{\\sin(2\\pi kx)}{k^{2n-1}},$$ from which we have $$S_{2n-1}(x)=\\frac{(-1)^n(2\\pi)^{2n-1}}{2(2n-1)!}B_{2n-1}\\left(\\frac{\\theta}{2\\pi}\\right).$$

Some elementary values include $$S_1(x) = -\\pi B_1(\\frac{x}{2\\pi})=\\frac{\\pi}{2}-\\frac{x}{2}$$ and $$S_3(x)=\\frac{\\pi^2}{6}x-\\frac{\\pi}{4}x^2+\\frac{1}{12}x^3.$$

A more simple closed form can be derived using integration. Start from 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n} = \\frac{\\pi-\\theta}{2}
$$ 

and integrate from 0 to $\\theta$ on both sides to get $$\\sum\\limits_{n=1}^\\infty \\frac{1-\\cos(n\\theta)}{n^2} = \\frac{\\pi\\theta}{2}-\\frac{\\theta^2}{4},$$ or 

$$
\\begin{align*}
\\sum\\limits_{n=1}^\\infty \\frac{\\cos(n\\theta)}{n^2} &= \\zeta(2)-\\frac{\\pi\\theta}{2}+\\frac{\\theta^2}{4} \\\\ &=\\frac{\\pi^2}{6}-\\frac{\\pi\\theta}{2}+\\frac{\\theta^2}{4}.

\\end{align*}
$$ 

For ease of notation I will use the notation $$\\sigma(\\alpha)=\\sum\\limits_{n=1}^\\infty \\frac{\\sin^\\alpha(n)}{n^\\alpha}.$$ 

Integrating the statement involving $\\zeta(2)$ once more yields 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n^3} = \\frac{\\pi^2\\theta}{6}-\\frac{\\pi\\theta^2}{2}+\\frac{\\theta^3}{4}.
$$

Similarly we obtain the relation $$\\sum\\limits_{n=1}^\\infty \\frac{\\cos(n\\theta)}{n^4} = \\zeta(4)-\\frac{\\pi^2\\theta^2}{12}+\\frac{\\pi\\theta^3}{12}-\\frac{\\theta^4}{48}= \\frac{\\pi^4}{90}-\\frac{\\pi^2\\theta^2}{12}+\\frac{\\pi\\theta^3}{12}-\\frac{\\theta^4}{48},$$ 

meaning 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n^5} = \\frac{\\pi^4\\theta}{90}-\\frac{\\pi^2\\theta^3}{36}+\\frac{\\pi\\theta^4}{48}-\\frac{\\theta^5}{240}
$$ 

and also 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n^7} = \\frac{\\pi^6\\theta}{945}-\\frac{\\pi^4\\theta^3}{540}+\\frac{\\pi^2\\theta^5}{720}-\\frac{\\pi \\theta^6}{1440}+\\frac{\\theta^7}{10080}.
$$

This process of repeated integration (or direct derivation from the expression involving Bernoulli polynomials) yields the general expression 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n^k}=\\sum\\limits_{i=0}^{(k-1)/2} \\frac{(-1)^i}{n!} \\binom{n}{n-1-2i} B_{n-1-2i} \\cdot (2\\pi)^{n-1-2i}x^{1+2i}
$$ 

where $$B_{2n}=\\frac{2(-1)^{n+1}(2n)!\\zeta(2n)}{(2\\pi)^{2n}}$$ is the $2n$'th Bernoulli number with $B_1=-\\frac{1}{2}, \\ B_0=0$. Evidently, from our previous examples, when we integrate $S_{n-1}(\\theta)$ we obtain an expression containing the term $\\zeta(n).$

Evidently this means that 
$$
\\begin{align*}
    \\sigma(3)&=\\frac{1}{4}\\left(3\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n)}{n^3}-\\sum\\limits_{n=1}^\\infty \\frac{\\sin(3n)}{n^3}\\right) \\\\ &= \\frac{3\\pi-4}{8}.
\\end{align*}
$$

and 

$$
\\begin{align*}
    \\sigma(5)&=\\frac{1}{16} \\left(10\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n)}{n^5}-5\\sum\\limits_{n=1}^\\infty \\frac{\\sin(3n)}{n^5}+\\sum\\limits_{n=1}^\\infty \\frac{\\sin(5n)}{n^5} \\right) \\\\ &= \\frac{115\\pi-192}{384}.
\\end{align*}
$$

Note that $\\sigma(7)$ is not linear in $\\pi$. Explicit computation gives 

$$
\\sigma(7)=\\frac{\\pi^{7}}{720}-\\frac{7\\pi^{6}}{240}+\\frac{49\\pi^{5}}{192}-\\frac{343\\pi^{4}}{288}+\\frac{2401\\pi^{3}}{768}-\\frac{16807\\pi^{2}}{3840}+\\frac{43141\\pi}{15360}-\\frac{1}{2}
$$

This non-linearity comes from the fact that $7>2\\pi$ and the fact that our sum in $\\sigma(7)$ involves $\\sum\\limits_{n=1}^\\infty \\frac{\\sin(7n)}{n^7}$. When evaluating the Clausen functions within the natural domain $\\theta \\in[0, 2\\pi]$, the individual Clausen functions are a sum of rational multiples of powers of $\\pi$ as each term in the expression $$\\sum\\limits_{n=1}^\\infty \\frac{\\sin(n\\theta)}{n^{2k+1}}$$ contains rational multiples of $\\pi^y\\theta^z$ for some $y+z=2k+1$. Yet for $\\theta>2\\pi$ we replace $\\theta$ by $\\theta \\mod 2\\pi$ due to periodicity, thus causing each term to not be a rational multiple of a power of $\\pi$.

We can also compute these infinite sums using residue analysis instead of doing brute force integration. Here is an alternate way to compute closed-form expressions for the Clausen functions.

The key argument is to consider the sum $$\\sum\\limits_{n=-\\infty,\\ n\\neq0 }^\\infty \\frac{(-1)^n\\sin(nx)}{n^3}$$ and note that $\\pi\\csc(\\pi z) = \\sum\\limits_{n=-\\infty}^\\infty \\frac{(-1)^n}{z-n}$ (hence why we are motivated to consider a sum over $\\mathbb{Z}$ and not $\\mathbb{Z}^+$) so $\\csc(\\pi z)$ has simple poles at all integers $n$ with residue $\\frac{(-1)^n}{\\pi}.$ 

Let 

$$
f_m(z)=\\frac{\\pi\\sin(zx)\\csc(\\pi z)}{z^m},
$$ 

and let $C_N$ be the circle contour of radius $N+\\frac{1}{2}$ which avoids integer poles. Note that 

$$
\\frac{1}{2\\pi i} \\oint_{C_N}f(z)\\ dz = \\text{Res}[f_m, 0] + \\sum\\limits_{n=-N}^N \\text{Res}[f_m, n]
$$ 

where we sum over the integer poles from $-N$ to $N$. Now note 

$$
\\text{Res}[f_m, n]=\\lim\\limits_{z\\to n}(z-n)\\frac{\\pi\\sin(zx)}{z^m}\\cdot \\frac{(-1)^n}{\\pi(z-n)}=\\frac{(-1)^n\\sin(nx)}{n^m};
$$ 

further note that in the limit $N\\to\\infty$, we have that the contour integral vanishes: $$\\lim\\limits_{N\\to\\infty} \\oint_{C_N}f_m(z)\\ dz=0$$ and so 

$$
\\text{Res}[f, 0] = -\\sum\\limits_{n=-\\infty, \\ n\\neq0}^\\infty \\frac{(-1)^n \\sin(nx)}{n^m},
$$

meaning that 

$$
\\sum\\limits_{n=-\\infty, \\ n\\neq0}^\\infty \\frac{(-1)^n \\sin(nx)}{n^m} = -\\text{Res}_{z=0}\\left[\\frac{\\pi\\sin(zx)\\csc(\\pi z)}{z^m}\\right]. 
$$

Computation is significantly easier for small values of $m$ like $m=3$ as for larger values of $m$ the $\\frac{1}{z}$ term would be further back in the series expansion of $f$, suggesting a more convoluted expression. Simply compute the Laurent series of $f_3(z)$ and extract the coefficient of $\\frac{1}{z}$ which is $\\frac{\\pi^2z-z^3}{6}.$

Therefore we have that 

$$
\\sum\\limits_{n=-\\infty,\\ n\\neq0 }^\\infty \\frac{(-1)^n\\sin(nx)}{n^3}=\\frac{x^3-\\pi^2 x}{6}.
$$ 

Shift $x$ to $x-\\pi$ to and divide by two to get 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin(nx)}{n^3}=\\frac{\\pi^2}{6}x-\\frac{\\pi}{4}x^2+\\frac{1}{12}x^3,
$$

as desired. 

(n.b. the shift $x \\to x-\\pi$) is a common trick to turn an alternating sum into a regular sum by using the properties of $\\sin$.

### Case 3: $\\alpha>1$, $\\alpha$ even

The case for the even integers is very much analogous to that of the odd integers. We first consider 

$$
\\begin{align*}
    \\sum\\limits_{n=1}^\\infty \\frac{\\sin^2(n)}{n^2}&=\\sum\\limits_{n=1}^\\infty \\frac{1-\\cos(2n)}{2n^2} \\\\ &= \\frac{1}{2} \\left(\\sum\\limits_{n=1}^\\infty \\frac{1}{n^2}-\\sum\\limits_{n=1}^\\infty \\frac{\\cos(2n)}{n^2}\\right) \\\\ &= \\frac{1}{2}\\left(\\frac{\\pi^2} {6} - \\left(\\frac{\\pi^2}{6}-\\pi+1 \\right)\\right) \\\\ &= \\frac{\\pi-1}{2}
\\end{align*}
$$

in which the closed form for $\\sum\\limits_{n=1}^\\infty \\frac{\\cos(2n)}{n^2}$ comes from evaluating the Fourier series of the function $f(x)=x^2.$

Integrating the $\\cos(2n)$ expression and using the values for $\\zeta(4)$ and $\\zeta(6)$, we get that 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\cos(4n)}{n^4}=\\frac{\\pi^4}{90}+\\frac{\\pi^2x^2}{12}-\\frac{\\pi x^3}{12}+\\frac{x^4}{48}
$$ 

and 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\cos(6n)}{n^6}=\\frac{\\pi^6}{945}+\\frac{\\pi^4x^2}{360}-\\frac{\\pi^2x^4}{144}+\\frac{x^6}{720}
$$ 

and thus 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\cos(8n)}{n^8}=\\frac{\\pi^8}{9450}+\\frac{\\pi^6x^2}{15120}-\\frac{\\pi^4x^4}{4320}-\\frac{\\pi^2x^6}{8640}-\\frac{x^8}{40320}
$$

Using a similar process as the odd-power case, we employ formulae to represent $\\frac{\\sin^k(n)}{n^k}$ in terms of $\\frac{\\cos(\\gamma_in)}{n^k}$ where $\\gamma_i<k$, yielding us 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin^4(n)}{n^4}=\\frac{2\\pi-3}{6}
$$ 
$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin^6(n)}{n^6}=\\frac{11\\pi-20}{40}
$$

which, as expected, is linear in $\\pi.$ 

Furthermore we have that 

$$
\\sum\\limits_{n=1}^\\infty \\frac{\\sin^8(n)}{n^8}=\\frac{-\\pi^8}{5040} + \\frac{\\pi^7}{180} - \\frac{\\pi^6}{15} + \\frac{4\\pi^5}{9} - \\frac{16\\pi^4}{9} + \\frac{64\\pi^3}{15} - \\frac{256\\pi^2}{45} + \\frac{733\\pi}{210} - \\frac{1}{2}.
$$

Coming to think of it, perhaps a nice upshot of this series of calculations is that $6<2\\pi < 7.$


`
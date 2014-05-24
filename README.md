# What's this about?

This is a really simple highlighting Library for Math Formulaes (and text). It was opriginally witten for use with [MathWebSearch](http://search.mathweb.org/). 

# Simple Example

Suppose we have some MathML embedded in the page: 

```html
<m:math xmlns="http://zentralblatt.org" alttext="R_{{\alpha,\beta,n}}\equiv\frac{[\sqrt{(\alpha+n)^{2}+\beta^{2}}-\sqrt{(\alpha%&#10;+n)^{2}-\alpha^{2}}]^{{1/n}}}{[\alpha^{2}+\beta^{2}]^{{1/2n}}}" xml:id="m19.1" display="inline" xref="m19.1.cmml">
<m:semantics xml:id="m19.1a" xref="m19.1.cmml">
    <m:mrow xml:id="m19.1.5" xref="m19.1.5.cmml">
        <m:msub xml:id="m19.1.5.1" xref="m19.1.5.1.cmml">
            <m:mi xml:id="m19.1.1" xref="m19.1.1.cmml">R</m:mi>
            <m:mrow xml:id="m19.1.2.1" xref="m19.1.2.1.cmml">
                <m:mi xml:id="m19.1.2.1.1" xref="m19.1.2.1.1.cmml">&#x3B1;</m:mi>
                <m:mo xml:id="m19.1.2.1a" xref="m19.1.2.1.cmml">,</m:mo>
                <m:mi xml:id="m19.1.2.1.3" xref="m19.1.2.1.3.cmml">&#x3B2;</m:mi>
                <m:mo xml:id="m19.1.2.1b" xref="m19.1.2.1.cmml">,</m:mo>
                <m:mi xml:id="m19.1.2.1.5" xref="m19.1.2.1.5.cmml">n</m:mi>
            </m:mrow>
        </m:msub>
        <m:mo xml:id="m19.1.3" xref="m19.1.3.cmml">&#x2261;</m:mo>
        <m:mfrac xml:id="m19.1.4" xref="m19.1.4.cmml">
            <m:msup xml:id="m19.1.4.2" xref="m19.1.4.2.cmml">
                <m:mrow xml:id="m19.1.4.2.8" xref="m19.1.4.2.8.cmml">
                    <m:mo xml:id="m19.1.4.2.8a" xref="m19.1.4.2.8.cmml">[</m:mo>
                    <m:mrow xml:id="m19.1.4.2.8b" xref="m19.1.4.2.8.cmml">
                        <m:msqrt xml:id="m19.1.4.2.2" xref="m19.1.4.2.2.cmml">
                            <m:mrow xml:id="m19.1.4.2.2.2" xref="m19.1.4.2.2.2.cmml">
                                <m:msup xml:id="m19.1.4.2.2.2.10" xref="m19.1.4.2.2.2.10.cmml">
                                    <m:mrow xml:id="m19.1.4.2.2.2.10.2" xref="m19.1.4.2.2.2.10.2.cmml">
                                        <m:mo xml:id="m19.1.4.2.2.2.10.2a" xref="m19.1.4.2.2.2.10.2.cmml">(</m:mo>
                                        <m:mrow xml:id="m19.1.4.2.2.2.10.2b" xref="m19.1.4.2.2.2.10.2.cmml">
                                            <m:mi xml:id="m19.1.4.2.2.2.2" xref="m19.1.4.2.2.2.2.cmml">&#x3B1;</m:mi>
                                            <m:mo xml:id="m19.1.4.2.2.2.3" xref="m19.1.4.2.2.2.3.cmml">+</m:mo>
                                            <m:mi xml:id="m19.1.4.2.2.2.4" xref="m19.1.4.2.2.2.4.cmml">n</m:mi>
                                        </m:mrow>
                                        <m:mo xml:id="m19.1.4.2.2.2.10.2c" xref="m19.1.4.2.2.2.10.2.cmml">)</m:mo>
                                    </m:mrow>
                                    <m:mn xml:id="m19.1.4.2.2.2.6.1" xref="m19.1.4.2.2.2.6.1.cmml">2</m:mn>
                                </m:msup>
                                <m:mo xml:id="m19.1.4.2.2.2.7" xref="m19.1.4.2.2.2.7.cmml">+</m:mo>
                                <m:msup xml:id="m19.1.4.2.2.2.11" xref="m19.1.4.2.2.2.11.cmml">
                                    <m:mi xml:id="m19.1.4.2.2.2.8" xref="m19.1.4.2.2.2.8.cmml">&#x3B2;</m:mi>
                                    <m:mn xml:id="m19.1.4.2.2.2.9.1" xref="m19.1.4.2.2.2.9.1.cmml">2</m:mn>
                                </m:msup>
                            </m:mrow>
                        </m:msqrt>
                        <m:mo xml:id="m19.1.4.2.3" xref="m19.1.4.2.3.cmml">-</m:mo>
                        <m:msqrt xml:id="m19.1.4.2.4" xref="m19.1.4.2.4.cmml">
                            <m:mrow xml:id="m19.1.4.2.4.2" xref="m19.1.4.2.4.2.cmml">
                                <m:msup xml:id="m19.1.4.2.4.2.10" xref="m19.1.4.2.4.2.10.cmml">
                                    <m:mrow xml:id="m19.1.4.2.4.2.10.2" xref="m19.1.4.2.4.2.10.2.cmml">
                                        <m:mo xml:id="m19.1.4.2.4.2.10.2a" xref="m19.1.4.2.4.2.10.2.cmml">(</m:mo>
                                        <m:mrow xml:id="m19.1.4.2.4.2.10.2b" xref="m19.1.4.2.4.2.10.2.cmml">
                                            <m:mi xml:id="m19.1.4.2.4.2.2" xref="m19.1.4.2.4.2.2.cmml">&#x3B1;</m:mi>
                                            <m:mo xml:id="m19.1.4.2.4.2.3" xref="m19.1.4.2.4.2.3.cmml">+</m:mo>
                                            <m:mi xml:id="m19.1.4.2.4.2.4" xref="m19.1.4.2.4.2.4.cmml">n</m:mi>
                                        </m:mrow>
                                        <m:mo xml:id="m19.1.4.2.4.2.10.2c" xref="m19.1.4.2.4.2.10.2.cmml">)</m:mo>
                                    </m:mrow>
                                    <m:mn xml:id="m19.1.4.2.4.2.6.1" xref="m19.1.4.2.4.2.6.1.cmml">2</m:mn>
                                </m:msup>
                                <m:mo xml:id="m19.1.4.2.4.2.7" xref="m19.1.4.2.4.2.7.cmml">-</m:mo>
                                <m:msup xml:id="m19.1.4.2.4.2.11" xref="m19.1.4.2.4.2.11.cmml">
                                    <m:mi xml:id="m19.1.4.2.4.2.8" xref="m19.1.4.2.4.2.8.cmml">&#x3B1;</m:mi>
                                    <m:mn xml:id="m19.1.4.2.4.2.9.1" xref="m19.1.4.2.4.2.9.1.cmml">2</m:mn>
                                </m:msup>
                            </m:mrow>
                        </m:msqrt>
                    </m:mrow>
                    <m:mo xml:id="m19.1.4.2.8c" xref="m19.1.4.2.8.cmml">]</m:mo>
                </m:mrow>
                <m:mrow xml:id="m19.1.4.2.6.1" xref="m19.1.4.2.6.1.cmml">
                    <m:mn xml:id="m19.1.4.2.6.1.1" xref="m19.1.4.2.6.1.1.cmml">1</m:mn>
                    <m:mo xml:id="m19.1.4.2.6.1a" xref="m19.1.4.2.6.1.cmml">/</m:mo>
                    <m:mi xml:id="m19.1.4.2.6.1.3" xref="m19.1.4.2.6.1.3.cmml">n</m:mi>
                </m:mrow>
            </m:msup>
            <m:msup xml:id="m19.1.4.3" xref="m19.1.4.3.cmml">
                <m:mrow xml:id="m19.1.4.3.10" xref="m19.1.4.3.10.cmml">
                    <m:mo xml:id="m19.1.4.3.10a" xref="m19.1.4.3.10.cmml">[</m:mo>
                    <m:mrow xml:id="m19.1.4.3.10b" xref="m19.1.4.3.10.cmml">
                        <m:msup xml:id="m19.1.4.3.10.1" xref="m19.1.4.3.10.1.cmml">
                            <m:mi xml:id="m19.1.4.3.2" xref="m19.1.4.3.2.cmml">&#x3B1;</m:mi>
                            <m:mn xml:id="m19.1.4.3.3.1" xref="m19.1.4.3.3.1.cmml">2</m:mn>
                        </m:msup>
                        <m:mo xml:id="m19.1.4.3.4" xref="m19.1.4.3.4.cmml">+</m:mo>
                        <m:msup xml:id="m19.1.4.3.10.2" xref="m19.1.4.3.10.2.cmml">
                            <m:mi xml:id="m19.1.4.3.5" xref="m19.1.4.3.5.cmml">&#x3B2;</m:mi>
                            <m:mn xml:id="m19.1.4.3.6.1" xref="m19.1.4.3.6.1.cmml">2</m:mn>
                        </m:msup>
                    </m:mrow>
                    <m:mo xml:id="m19.1.4.3.10c" xref="m19.1.4.3.10.cmml">]</m:mo>
                </m:mrow>
                <m:mrow xml:id="m19.1.4.3.8.1" xref="m19.1.4.3.8.1.cmml">
                    <m:mrow xml:id="m19.1.4.3.8.1.6" xref="m19.1.4.3.8.1.6.cmml">
                        <m:mn xml:id="m19.1.4.3.8.1.1" xref="m19.1.4.3.8.1.1.cmml">1</m:mn>
                        <m:mo xml:id="m19.1.4.3.8.1.6a" xref="m19.1.4.3.8.1.6.cmml">/</m:mo>
                        <m:mn xml:id="m19.1.4.3.8.1.3" xref="m19.1.4.3.8.1.3.cmml">2</m:mn>
                    </m:mrow>
                    <m:mo xml:id="m19.1.4.3.8.1.5" xref="m19.1.4.3.8.1.5.cmml">&#x2062;</m:mo>
                    <m:mi xml:id="m19.1.4.3.8.1.4" xref="m19.1.4.3.8.1.4.cmml">n</m:mi>
                </m:mrow>
            </m:msup>
        </m:mfrac>
    </m:mrow>
    <m:annotation-xml xml:id="m19.1.cmml" encoding="MathML-Content" xref="m19.1">
        <m:apply xml:id="m19.1.5.cmml" xref="m19.1.5">
            <m:equivalent xml:id="m19.1.3.cmml" xref="m19.1.3"/>
            <m:apply xml:id="m19.1.5.1.cmml" xref="m19.1.5.1">
                <m:csymbol cd="ambiguous" xml:id="m19.1.5.1.1.cmml">subscript</m:csymbol>
                <m:ci xml:id="m19.1.1.cmml" xref="m19.1.1">R</m:ci>
                <m:apply xml:id="m19.1.2.1.cmml" xref="m19.1.2.1">
                    <m:list xml:id="m19.1.2.1.6.cmml"/>
                    <m:ci xml:id="m19.1.2.1.1.cmml" xref="m19.1.2.1.1">&#x3B1;</m:ci>
                    <m:ci xml:id="m19.1.2.1.3.cmml" xref="m19.1.2.1.3">&#x3B2;</m:ci>
                    <m:ci xml:id="m19.1.2.1.5.cmml" xref="m19.1.2.1.5">n</m:ci>
                </m:apply>
            </m:apply>
            <m:apply xml:id="m19.1.4.cmml" xref="m19.1.4">
                <m:divide xml:id="m19.1.4.1.cmml"/>
                <m:apply xml:id="m19.1.4.2.cmml" xref="m19.1.4.2">
                    <m:csymbol cd="ambiguous" xml:id="m19.1.4.2.7.cmml">superscript</m:csymbol>
                    <m:apply xml:id="m19.1.4.2.8.cmml" xref="m19.1.4.2.8">
                        <m:minus xml:id="m19.1.4.2.3.cmml" xref="m19.1.4.2.3"/>
                        <m:apply xml:id="m19.1.4.2.2.cmml" xref="m19.1.4.2.2">
                            <m:root xml:id="m19.1.4.2.2a.cmml" xref="m19.1.4.2.2"/>
                            <m:apply xml:id="m19.1.4.2.2.2.cmml" xref="m19.1.4.2.2.2">
                                <m:plus xml:id="m19.1.4.2.2.2.7.cmml" xref="m19.1.4.2.2.2.7"/>
                                <m:apply xml:id="m19.1.4.2.2.2.10.cmml" xref="m19.1.4.2.2.2.10">
                                    <m:csymbol cd="ambiguous" xml:id="m19.1.4.2.2.2.10.1.cmml">superscript</m:csymbol>
                                    <m:apply xml:id="m19.1.4.2.2.2.10.2.cmml" xref="m19.1.4.2.2.2.10.2">
                                        <m:plus xml:id="m19.1.4.2.2.2.3.cmml" xref="m19.1.4.2.2.2.3"/>
                                        <m:ci xml:id="m19.1.4.2.2.2.2.cmml" xref="m19.1.4.2.2.2.2">&#x3B1;</m:ci>
                                        <m:ci xml:id="m19.1.4.2.2.2.4.cmml" xref="m19.1.4.2.2.2.4">n</m:ci>
                                    </m:apply>
                                    <m:cn type="integer" xml:id="m19.1.4.2.2.2.6.1.cmml" xref="m19.1.4.2.2.2.6.1">2</m:cn>
                                </m:apply>
                                <m:apply xml:id="m19.1.4.2.2.2.11.cmml" xref="m19.1.4.2.2.2.11">
                                    <m:csymbol cd="ambiguous" xml:id="m19.1.4.2.2.2.11.1.cmml">superscript</m:csymbol>
                                    <m:ci xml:id="m19.1.4.2.2.2.8.cmml" xref="m19.1.4.2.2.2.8">&#x3B2;</m:ci>
                                    <m:cn type="integer" xml:id="m19.1.4.2.2.2.9.1.cmml" xref="m19.1.4.2.2.2.9.1">2</m:cn>
                                </m:apply>
                            </m:apply>
                        </m:apply>
                        <m:apply xml:id="m19.1.4.2.4.cmml" xref="m19.1.4.2.4">
                            <m:root xml:id="m19.1.4.2.4a.cmml" xref="m19.1.4.2.4"/>
                            <m:apply xml:id="m19.1.4.2.4.2.cmml" xref="m19.1.4.2.4.2">
                                <m:minus xml:id="m19.1.4.2.4.2.7.cmml" xref="m19.1.4.2.4.2.7"/>
                                <m:apply xml:id="m19.1.4.2.4.2.10.cmml" xref="m19.1.4.2.4.2.10">
                                    <m:csymbol cd="ambiguous" xml:id="m19.1.4.2.4.2.10.1.cmml">superscript</m:csymbol>
                                    <m:apply xml:id="m19.1.4.2.4.2.10.2.cmml" xref="m19.1.4.2.4.2.10.2">
                                        <m:plus xml:id="m19.1.4.2.4.2.3.cmml" xref="m19.1.4.2.4.2.3"/>
                                        <m:ci xml:id="m19.1.4.2.4.2.2.cmml" xref="m19.1.4.2.4.2.2">&#x3B1;</m:ci>
                                        <m:ci xml:id="m19.1.4.2.4.2.4.cmml" xref="m19.1.4.2.4.2.4">n</m:ci>
                                    </m:apply>
                                    <m:cn type="integer" xml:id="m19.1.4.2.4.2.6.1.cmml" xref="m19.1.4.2.4.2.6.1">2</m:cn>
                                </m:apply>
                                <m:apply xml:id="m19.1.4.2.4.2.11.cmml" xref="m19.1.4.2.4.2.11">
                                    <m:csymbol cd="ambiguous" xml:id="m19.1.4.2.4.2.11.1.cmml">superscript</m:csymbol>
                                    <m:ci xml:id="m19.1.4.2.4.2.8.cmml" xref="m19.1.4.2.4.2.8">&#x3B1;</m:ci>
                                    <m:cn type="integer" xml:id="m19.1.4.2.4.2.9.1.cmml" xref="m19.1.4.2.4.2.9.1">2</m:cn>
                                </m:apply>
                            </m:apply>
                        </m:apply>
                    </m:apply>
                    <m:apply xml:id="m19.1.4.2.6.1.cmml" xref="m19.1.4.2.6.1">
                        <m:divide xml:id="m19.1.4.2.6.1.2.cmml"/>
                        <m:cn type="integer" xml:id="m19.1.4.2.6.1.1.cmml" xref="m19.1.4.2.6.1.1">1</m:cn>
                        <m:ci xml:id="m19.1.4.2.6.1.3.cmml" xref="m19.1.4.2.6.1.3">n</m:ci>
                    </m:apply>
                </m:apply>
                <m:apply xml:id="m19.1.4.3.cmml" xref="m19.1.4.3">
                    <m:csymbol cd="ambiguous" xml:id="m19.1.4.3.9.cmml">superscript</m:csymbol>
                    <m:apply xml:id="m19.1.4.3.10.cmml" xref="m19.1.4.3.10">
                        <m:plus xml:id="m19.1.4.3.4.cmml" xref="m19.1.4.3.4"/>
                        <m:apply xml:id="m19.1.4.3.10.1.cmml" xref="m19.1.4.3.10.1">
                            <m:csymbol cd="ambiguous" xml:id="m19.1.4.3.10.1.1.cmml">superscript</m:csymbol>
                            <m:ci xml:id="m19.1.4.3.2.cmml" xref="m19.1.4.3.2">&#x3B1;</m:ci>
                            <m:cn type="integer" xml:id="m19.1.4.3.3.1.cmml" xref="m19.1.4.3.3.1">2</m:cn>
                        </m:apply>
                        <m:apply xml:id="m19.1.4.3.10.2.cmml" xref="m19.1.4.3.10.2">
                            <m:csymbol cd="ambiguous" xml:id="m19.1.4.3.10.2.1.cmml">superscript</m:csymbol>
                            <m:ci xml:id="m19.1.4.3.5.cmml" xref="m19.1.4.3.5">&#x3B2;</m:ci>
                            <m:cn type="integer" xml:id="m19.1.4.3.6.1.cmml" xref="m19.1.4.3.6.1">2</m:cn>
                        </m:apply>
                    </m:apply>
                    <m:apply xml:id="m19.1.4.3.8.1.cmml" xref="m19.1.4.3.8.1">
                        <m:times xml:id="m19.1.4.3.8.1.5.cmml" xref="m19.1.4.3.8.1.5"/>
                        <m:apply xml:id="m19.1.4.3.8.1.6.cmml" xref="m19.1.4.3.8.1.6">
                            <m:divide xml:id="m19.1.4.3.8.1.2.cmml"/>
                            <m:cn type="integer" xml:id="m19.1.4.3.8.1.1.cmml" xref="m19.1.4.3.8.1.1">1</m:cn>
                            <m:cn type="integer" xml:id="m19.1.4.3.8.1.3.cmml" xref="m19.1.4.3.8.1.3">2</m:cn>
                        </m:apply>
                        <m:ci xml:id="m19.1.4.3.8.1.4.cmml" xref="m19.1.4.3.8.1.4">n</m:ci>
                    </m:apply>
                </m:apply>
            </m:apply>
        </m:apply>
    </m:annotation-xml>
    <m:annotation xml:id="m19.1b" encoding="application/x-tex" xref="m19.1.cmml">R_{{\alpha,\beta,n}}\equiv\frac{[\sqrt{(\alpha+n)^{2}+\beta^{2}}-\sqrt{(\alpha%
    +n)^{2}-\alpha^{2}}]^{{1/n}}}{[\alpha^{2}+\beta^{2}]^{{1/2n}}}</m:annotation>
</m:semantics>
</m:math>

```
and we want to highlight some parts of it with a specific color. Then we do: 

```js
var element = FHL.getPresentation("m19.1", "/*[1]/*[3]/*[2]/*[2]/*[2]/*[2]/*[2]"); 

element.setAttribute("mathcolor", "blue"); 
```
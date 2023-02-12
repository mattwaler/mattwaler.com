export default `
<code>
<span class="token keyword">let</span> needsMattsHelp <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token keyword">const</span> <span class="token function-variable function">contactMatt</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>needsMattsHelp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">contactMatt</span><span class="token punctuation">(</span><span class="token string">"Let's get started!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code>
`

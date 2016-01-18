---
layout: post
title:  "Setup Your Site with Minimal Effort"
date:   2015-12-10
author: Zeheng Li
---
Once upon a time I had a domain and a hosting account on U.S. [GoDaddy](https://www.godaddy.com/), where a [WordPress](https://wordpress.org/) blog and a simple static site was hosted. I ended up paying $60~70 annually. Early this year I managed to remind myself to cancel the automatic renewal and stop wasting money. Since my site was no longer live, I looked for alternatives. If you google "create a free website", you can find options such as [WIX](http://www.wix.com/) and [Weebly](http://www.weebly.com/).

"I DON'T LIKE THEM"

I prefer something minimal and hackable at the same time. That's the reason I decide to use Github and Jekyll, alongside with other ready-made tools such Disqus and Google Analytics to create this website.

# Getting started

Assume you have ruby installed, open your terminal and fetch jekyll and pygments (our code highlighter).

{% highlight bash %}
gem install jekyll
{% endhighlight %}

Then creating a static website is easy as pie.

{% highlight bash %}
jekyll new site
cd site
jekyll serve
{% endhighlight %}

You should be able to browse the site at http://locahost:4000

# Add a comment section for each post

You may need to create a Disqus account to begin with. Then go to [https://disqus.com/admin/create/](https://disqus.com/admin/create/) to register a site profile. Once finished, head to *installation* for *Universal Code* where you can find the following. You may want to set up the URL and identifier variable.

{% highlight html %} {% raw %}
<div id="disqus_thread"></div>
<script>
/**
* RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
* LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
*/

var disqus_config = function () {
this.page.url = "{{site.url}}{{page.url}}"; // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = "{{page.id}}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');

s.src = '//zehengl.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
{% endraw %} {% endhighlight %}

It simply plugs and plays. In other words, create a **"comments.html"** within **"_includes"** folder, paste the code above, and {% raw %} {% include comments.html %} {% endraw %} wherever you want to display the comment section. In my case, it is placed in the layout of post, **"_layouts/post.html"**.

# Add share buttons for social networks

It's a good idea to put some share buttons that give readers easy access to promote your site. You only need to include few lines of code that are generated automatically by the social networks. 

"LESS codes your write LESS bugs you will encounter"

* [Twitter share button][2]

FYI, here's the code I get and save to **"_includes/button_twitter.html"**.

{% highlight html %} {% raw %}
<a href="https://twitter.com/share" class="twitter-share-button"{count}>Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
{% endraw %} {% endhighlight %}

* [Linkedin share button][3]

FYI, here's the code I get, modify to include current page's URL, and save to **"_includes/button_linkedin.html"**.
  
{% highlight html %} {% raw %}
<script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
<script type="IN/Share" data-url="{{site.url}}{{page.url}}"></script>
{% endraw %} {% endhighlight %}

* [Google share button][4]

FYI, here's the code I get and save to **"_includes/button_google.html"**.

{% highlight html %} {% raw %}
<script src="https://apis.google.com/js/platform.js" async defer></script>
<g:plus action="share" height="20"></g:plus>
{% endraw %} {% endhighlight %}


* [Facebook share button][1]

Facebook asks you to include its JavaScript SDK on your page. Then you can place the plugin wherever you want the plugin to appear.

First, I save the following code to **"_includes/button_facebook.html"**.

{% highlight html %} {% raw %}
<div class="fb-share-button" data-href="{{site.url}}{{page.url}}" data-layout="button"></div>
{% endraw %} {% endhighlight %} 

Second, place the JavaScript SDK in **"_layouts/post.html"**.

*P.S.* In order to line up these 3 buttons horizontally, I have to put them in different containers and adjust the margins.

Therefore, the *post layout* is as shown below.

{% highlight html %} {% raw %}
---
layout: default
---
<div id="fb-root"></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<article class="post" itemscope itemtype="http://schema.org/BlogPosting">

<header class="post-header">
  <h1 class="post-title" itemprop="name headline">{{ page.title }}</h1>
  <p class="post-meta"><time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">{{ page.date | date: "%b %-d, %Y" }}</time>{% if page.author %} by <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{ page.author }}</span></span>{% endif %}</p>
</header>

<div class="post-content" itemprop="articleBody">
  {{ content }}
</div>

</article>

<div style="float:left"> 
{% include button_facebook.html %}
</div>

<div style="float:left;margin-left:4px; margin-top:4px" >

{% include button_twitter.html %}

{% include button_linkedin.html %}

{% include button_google.html %}

</div>

{% include comments.html %}
{% endraw %} {% endhighlight %}

[1]: https://developers.facebook.com/docs/plugins/share-button

[2]: https://about.twitter.com/resources/buttons

[3]: https://developer.linkedin.com/plugins/share

[4]: https://developers.google.com/+/web/share/

# Add Google Analytics

Finally, I want to enable [Google Analytics](https://www.google.com/analytics/) on the site. It cannot be easier. Register your Google Analytics, get the tracking code, and place it wherever you like.

I save the following code to **"_includes/google_analytics.html"** 

{% highlight html %} {% raw %}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'my_tracking_id', 'auto');
  ga('send', 'pageview');

</script>
{% endraw %} {% endhighlight %}

and {% raw %} {% include google_analytics.html %} {% endraw %} in **"_layouts/default.html"**.

# One more thing

You want Github to host your jekyll site. Following is pretty standard if you know git.

{% highlight bash %}
git init
git add .
git commit -m "commit message, such as First Commit or somethign meaningful"
git remote add origin "remote repository URL"
git push origin master
{% endhighlight %}

# THANKS FOR READING

You can also checkout my site on Github: [https://github.com/zehengl/zehengl.github.io](https://github.com/zehengl/zehengl.github.io)

zehengl


##The Bezos-Post Conflict-of-Interest Crayon

The Conflict-of-Interest Crayon is a bookmarklet that highlights subjects, companies and people which now pose an actual or potential conflict of interest for reporters at the Jeff Bezos-owned Washington Post.

For instance, here's what the Conflict-of-Interest crayon found in a *Post* [story]((http://www.washingtonpost.com/blogs/wonkblog/wp/2013/08/06/heres-what-amazon-lobbies-for-in-d-c/) about the lobbying activities of Bezos's main company, Amazon: 

![WaPo screenshot](https://raw.github.com/coreyp/The-Bezos-Post-Conflict-of-Interest-Crayon/master/AmazonWaPo1.jpg)

##How to install it

To install the bookmarklet, follow these instructions. 

TK

After you've dragged the bookmarklet into your browser's bookmarks bar, head on over to [washingtonpost.com](http://www.washingtonpost.com/). 

Now click on the bookmarklet while viewing any *Post* article or section front, including the home page.

After a brief delay for processing, the **Bezos-Post Conflict-of-Interest Crayon** should highlight your electronic copy of the *Post* with yellow streaks of skepticism. 

Sometimes a question mark will appear next to your cursor when you hover over a highlight. If that happens, it means you can click on the highlighted word for some additional explanation. Thus:

![WaPo screenshot](https://raw.github.com/coreyp/The-Bezos-Post-Conflict-of-Interest-Crayon/master/AmazonWaPo2.jpg)

The bookmarklet will highlight words on any page, even those outside the washingtonpost.com domain, so you can use it to analyze *Post*-managed Twitter pages or *Post* stories in your RSS reader (or auctions on Amazon.com for that matter).

###What gets highlighted?

The words and phrases identified as potential conflicts of interest are listed in a [public wiki, here](https://github.com/coreyp/The-Bezos-Post-Conflict-of-Interest-Crayon/wiki/Running-list-of-potential-ownership-related-conflicts-for-the-Washington-Post).

I came up with the initial list of approximately 440 keywords based on a couple of hours worth of research on Wikipedia, news websites, NASDAQ, the Securities and Exchange Commission and the Sunlight Foundation's wonderful [Influence Explorer](http://influenceexplorer.com/), which aggregates public records on campaign finance, lobbying, federal regulation and more.

So far the list contains the following:


* people closely related, in one way or another, to Bezos; 
* companies with which Amazon or another Bezos company does business; 
* companies which compete with Amazon or another Bezos company; 
* industries, sectors and product categories which make Amazon and Bezos a significant amount of money; 
* companies and people which have sued or are being sued by Amazon or Bezos; 
* politicians and causes supported or opposed, financially or otherwise, by Bezos or Amazon;
* common sense extrapolations drawn from the above.


The list is by no means complete. It contains a number of redundancies and likely also some inaccuracies. A few sources are listed in the wiki; it would be nice if people wanted to help flesh that out a bit.

###How to contribute

Please suggest additional conflicts [in the wiki](https://github.com/coreyp/The-Bezos-Post-Conflict-of-Interest-Crayon/wiki/Running-list-of-potential-ownership-related-conflicts-for-the-Washington-Post) or, if you don't have a GitHub account, by [TK, here](LINKTK). 

If I like a suggestion, I'll add it to the script at this repo, which will automatically update the bookmarklet for all users.  

Likewise, if someone makes a convincing argument that something I've included does not pose an actual or potential conflict of interest for *Post* reporters and editors, I'll remove it from the list.

###What does it all mean?

**The Bezos-Post Conflict-of-Interest Crayon** is not a lie detector. Just because it highlights something in a story on the *Post* website doesn't mean the story is false, inaccurate, skewed or misleading. 

It does indicate that the *Post*'s new owner, Jeff Bezos, has an outside stake in something that was mentioned in the story. *Post* readers deserve to know such information, so they can judge the organization's news coverage, editorials and op-ed columns with all of the relevant context.

The *Post*'s own [Code of Business conduct](http://media.corporate-ir.net/media_files/irol/62/62487/reports/COBC2003washpostcoposting.pdf), revised in 2003 (and probably again fairly soon), stresses the importance of disclosure in such cases:

> Although the mere existence of an actual or potential conflict of interest does not imply wrongdoing on anyone's part, eliminating or otherwise appropriately managing such conflicts is essential to maintaining the Company's reputation…

> ###Disclosure Required

> When in Doubt, Ask! 

> Employees must promptly and fully disclose to their managers any circumstances they become aware of that could possibly be viewed as creating a conflict of interest, even if the individual employee does not believe that his/her objectivity is being compromised in any way by those circumstances.

Bezos's business holdings are far, far greater than those of the newspaper's previous owners, as are his lobbying efforts. The *Post*'s coverage demands a new degree of scrunity, especially when it covers stories which could affect the fortunes of its new owner.

---
###Technical details
**The Bezos-Post Conflict-of-Interest Crayon** is a javascript and bash tool closely based on [Jargone](http://rooreynolds.github.com/jargone/) by [Roo Reynolds](http://rooreynolds.com/about/), who deserves credit for the code. Fork away, that's what I did.

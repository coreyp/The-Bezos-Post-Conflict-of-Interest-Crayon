/*
 * The Bezos-Post Conflict-of-Interest Crayon
 * 
 * A bookmarklet that helps track the consequences of media consolidation.
 * Forked by @coreypein from Jargone by @rooreynolds
 * 
 * [NB: jargone.js is built using build.sh. Expect changes here to be overwritten]
 */

javascript:(function () { 

    // list of words to avoid based on https://www.gov.uk/designprinciples/styleguide#item_4_1_3
    var words = [
            ['47 North', "Amazon brand label"],
            ['A2Z Development', "Amazon subsidiary"],
            ['A9.com', "Amazon subsidiary"],
            ['AbeBooks', "Amazon acquisition"],
            ['Accept.com', "Amazon acquisition"],
            ['Adaptix', "Amazon legal adversary party"],
            ['advertising', "Amazon lobbying item"],
            ['affiliate marketing'],
            ['ALEC', "former member (Amazon)"],
            ['Alexa', "Amazon acquisition"],
            ['Allen & Co.', "Brokered sale of Washington Post to Bezos"],
            ['Allen and Company', "Brokered sale of Washington Post to Bezos"],
            ['AllianceBernstein', "Amazon shareholder"],
            ['Amazon', "The company, not the river"],
            ['Amazon Web Services', "Amazon brand label"],
            ['Amazon.com, Inc.'],
            ['AmazonCrossing', "Amazon brand label"],
            ['AmazonEncore', "Amazon brand label"],
            ['AmazonFresh', "Amazon subsidiary"],
            ['AmazonLocal', "Amazon brand label"],
            ['AmazonWireless', "Amazon brand label"],
            ['American Century Companies Inc', "Amazon shareholder"],
            ['American Legislative Exchange Council', "former member (Amazon)"],
            ['Ameriprise Financial', "Amazon shareholder"],
            ['Amie Street', "Amazon acquisition"],
            ['AMZN'],
            ['Android', "Amazon competitor"],
            ['antitrust', "Amazon lobbying item"],
            ['apparel', "Amazon product category"],
            ['APPL', "Amazon competitor"],
            ['Apple', "Amazon competitor"],
            ['appliances', "Amazon product category"],
            ['apps', "Amazon product category"],
            ['appstore', "Amazon product category"],
            ['art supplies', "Amazon product category"],
            ['arts & crafts', "Amazon product category"],
            ['arts and crafts', "Amazon product category"],
            ['arvato systems', "Amazon business partner"],
            ['AT & T', "Amazon business partner"],
            ['AT&T', "Amazon business partner"],
            ['auction'],
            ['Audible.com', "Amazon acquisition"],
            ['audio', "Amazon product category"],
            ['audio book', "Amazon product category"],
            ['audiobook', "Amazon product category"],
            ['Austro-Mechana', "Amazon legal adversary party"],
            ['automation'],
            ['automobile accessories', "Amazon product category"],
            ['automotive', "Amazon product category"],
            ['AUVIBEL', "Amazon legal adversary party"],
            ['AWS', "Amazon brand label"],
            ['baby products', "Amazon product category"],
            ['Baillie Gifford', "Amazon shareholder"],
            ['Banguard Group', "Amazon shareholder"],
            ['Bank of America', "Amazon shareholder"],
            ['Bank of New York Mellon', "Amazon shareholder"],
            ['Barack Obama', "Bezos-supported politician"],
            ['Barclays', "Amazon shareholder"],
            ['Barnes & Noble', "competitor"],
            ['Barnes and Noble', "competitor"],
            ['Batman', "Amazon business partner trademark"],
            ['beauty product', "Amazon product category"],
            ['bebe', "Amazon business partner"],
            ['Benefit Cosmetics', "Amazon business partner"],
            ['Bezos'],
            ['Bezos Expeditions', "private Bezos holding"],
            ['Bilderberg'],
            ['Bilderberg Group'],
            ['Blackrock Advisors', "Amazon shareholder"],
            ['Blackrock Fund Advisors', "Amazon shareholder"],
            ['Blackrock Group', "Amazon shareholder"],
            ['Blue Origin', "private Bezos holding"],
            ['book', "Amazon product category"],
            ['book on tape', "Amazon product category"],
            ['BookFinder', "Amazon acquisition"],
            ['Bookpages', "Amazon acquisition"],
            ['books', "Amazon product category"],
            ['books on tape', "Amazon product category"],
            ['bookshop'],
            ['bookstore'],
            ['BookSurge', "Amazon acquisition"],
            ['Box Office Mojo', "Amazon acquisition"],
            ['Brilliance Audio', "Amazon acquisition"],
            ['BuyVIP', "Amazon acquisition"],
            ['cable', "As in'I only got cable for HBO'"],
            ['Cadabra', "Amazon predecesor corporation"],
            ['Calamos Advisors', "Amazon shareholder"],
            ['camera equipment', "Amazon product category"],
            ['Capital Research', "Amazon shareholder"],
            ['Capital World Investors', "Amazon shareholder"],
            ['Capitol Tax Partners', "Amazon lobbyist"],
            ['CD', "Amazon product category"],
            ['cell phones', "Amazon product category"],
            ['cellular phones', "Amazon product category"],
            ['Central Intelligence Agency', "Amazon business partner"],
            ['CIA', "Amazon business partner"],
            ['clothing', "Amazon product category"],
            ['cloud computing', "Amazon product category"],
            ['cloud infrastructure', "Amazon product category"],
            ['Cloud Satchel', "Amazon legal adversary party"],
            ['Combating Organized Retail Crime Act', "Amazon lobbying item"],
            ['commerce'],
            ['computers', "Amazon product category, lobbying item"],
            ['consumer product safety', "Amazon lobbying item"],
            ['consumer safety', "Amazon lobbying item"],
            ['copyright', "Amazon lobbying item"],
            ['cosmetics', "Amazon product category"],
            ['coupon'],
            ['crafts', "Amazon product category"],
            ['CreateSpace', "Amazon acquisition"],
            ['Credit Card Fair Fee Act', "Amazon lobbying item"],
            ['Credit Card Fair Fee Act', "Amazon lobbying item"],
            ['credit card fee', "Amazon lobbying item"],
            ['Credit Card Interchange Fees Act', "Amazon lobbying item"],
            ['Credit Suisse Ag', "Amazon shareholder"],
            ['customer'],
            ['customer service'],
            ['customers'],
            ['David Bockorny', "Amazon lobbyist"],
            ['DC Comics', "Amazon business partner"],
            ['diapers', "Amazon product category"],
            ['Diapers.com', "Amazon acquisition"],
            ['discount'],
            ['Discount Pricing Consumer Protection Act', "Amazon lobbying item"],
            ['discounted'],
            ['discounts'],
            ['Don Graham'],
            ['Donald E. Graham'],
            ['Donald Graham'],
            ['download'],
            ['dpreview', "Amazon acquisition"],
            ['DVD', "Amazon product category"],
            ['e-book', "Amazon product category"],
            ['e-commerce', "Amazon product category"],
            ['E-fencing Enforcement Act', "Amazon lobbying item"],
            ['e-reader', "Amazon product category"],
            ['ebook', "Amazon product category"],
            ['ecommerce', "Amazon product category"],
            ['Edgewood Management', "Amazon shareholder"],
            ['electronics', "Amazon product category"],
            ['Elia Data', "Amazon legal adversary party"],
            ['Elizabeth W. Frazee', "Amazon lobbyist"],
            ["Emmett O'Keefe", "Amazon lobbyist"],
            ['Endless.com', "Amazon subsidiary"],
            ['Engine Yard', "Amazon investee"],
            ['Eolas Technologies', "Amazon legal adversary party"],
            ['equal marriage'],
            ['Evi', "Amazon acquisition"],
            ['Exchange.com', "Amazon acquisition"],
            ['Explore Holdings', "Bezos private company"],
            ['Fabric.com', "Amazon acquisition"],
            ['file storage'],
            ['file transfer'],
            ['FillZ', "Amazon acquisition"],
            ['Fisher Asset Management', "Amazon shareholder"],
            ['FMR', "Amazon shareholder"],
            ['Franklin Resources', "Amazon shareholder"],
            ['Fred Alger Management Inc', "Amazon shareholder"],
            ['French Tax Administration'],
            ['FTA'],
            ['fulfillment center'],
            ['furniture', "Amazon product category"],
            ['garden', "Amazon product category"],
            ['gay marriage'],
            ['Geode Capital Management', "Amazon shareholder"],
            ['gift cards', "Amazon product category"],
            ['Global Investors', "Amazon shareholder"],
            ['Gojaba', "Amazon acquisition"],
            ['Goldman Sachs', "Amazon shareholder"],
            ['GoodReads', "Amazon acquisition"],
            ['GOOG', "Amazon competitor"],
            ['Google', "Amazon competitor"],
            ['gourmet food', "Amazon product category"],
            ['Green Lantern', "Amazon business partner trademark"],
            ['grocer', "Amazon product category"],
            ['groceries', "Amazon product category"],
            ['Groupon', "Amazon competitor"],
            ['Hachette', "Amazon competitor"],
            ['HarperCollins', "Amazon competitor"],
            ['Harry Reid', "Bezos-supported politician"],
            ['home improvement', "Amazon product category"],
            ['Homeland Security', "Amazon lobbying item"],
            ['hosting', "Amazon product category"],
            ['Hulu', "Amazon competitor"],
            ['Hybris', "Amazon business partner"],
            ['IMDB', "Amazon acquisition"],
            ['industrial & scientific', "Amazon product category"],
            ['industrial and scientific', "Amazon product category"],
            ['industrial supply', "Amazon product category"],
            ['information technology', "Amazon product category, lobbying item"],
            ['innovation'],
            ['intelligence', "Amazon lobbying item"],
            ['interchange fee'],
            ['Internal Revenue Service'],
            ['internet'],
            ['Internet Movie Database', "Amazon acquisition"],
            ['Invesco', "Amazon shareholder"],
            ['iPad'],
            ['IRS'],
            ['iTunes', "Amazon competitor"],
            ['IVONA Software', "Amazon acquisition"],
            ['Jacklyn Gise Jorgensen', "Bezos mother"],
            ['Jacklyn Jorgensen', "Bezos mother"],
            ['Janus Capital Management', "Amazon shareholder"],
            ['Jay Inslee', "Bezos-supported politician"],
            ['Jay Inslee', "Bezos-supported politician"],
            ['Jeff Bezos'],
            ['Jeff Forbes', "Amazon lobbyist"],
            ['Jeffrey Bezos'],
            ['Jeffrey Jorgensen'],
            ['Jeffrey P. Bezos'],
            ['Jeffrey P. Jorgensen'],
            ['Jeffrey Preston "Jeff" Bezos'],
            ['Jeffrey Preston Jorgensen'],
            ['Jennison Associates', "Amazon shareholder"],
            ['jewelry', "Amazon product category"],
            ['John Conyers, Jr.', "Bezos-supported politician"],
            ['John Kerry', "Bezos-supported politician"],
            ['Joyo.com', "Amazon acquisition"],
            ['JPMorgan Chase', "Amazon shareholder"],
            ['Junglee', "Amazon acquisition"],
            ['Katharine Weymouth'],
            ['Kindle'],
            ['kitchen', "Amazon product category"],
            ['Kiva Systems', "Amazon acquisition"],
            ['Lab126', "Amazon subsidiary"],
            ['labor', "Amazon product category, lobbying item"],
            ['Lacoste', "Amazon business partner"],
            ['Lansdowne Partners', "Amazon shareholder"],
            ['lawn', "Amazon product category"],
            ['lawn & garden', "Amazon product category"],
            ['lawn and garden', "Amazon product category"],
            ['Legal & General Group', "Amazon shareholder"],
            ['Lexcycle', "Amazon acquisition"],
            ['Lexington Luminance', "Amazon legal adversary party"],
            ['libraries', "Amazon acquisition"],
            ['library', "Amazon acquisition"],
            ['LibraryThing', "Amazon acquisition"],
            ['LivingSocial', "Amazon investee"],
            ['lobby'],
            ['lobbying'],
            ['logistics'],
            ['LoveFilm', "Amazon acquisition"],
            ['LVL Patent Group', "Amazon legal adversary party"],
            ['Mackenzie Bezos', "Bezos wife"],
            ['Macmillan', "Amazon competitor"],
            ['magazines', "Amazon product category"],
            ['main street'],
            ['Main Street Fairness Act', "Amazon lobbying item"],
            ['Main Street Fairness Act', "Amazon lobbying item"],
            ['Managed Account Advisors', "Amazon shareholder"],
            ['Manulife Asset Management', "Amazon shareholder"],
            ['Maria Cantwell', "Bezos-supported politician"],
            ['Marks & Spencer', "Amazon business partner"],
            ['Marks and Spencer', "Amazon business partner"],
            ['maternity'],
            ['Mechanical Turk', "Amazon brand label"],
            ['media'],
            ['Michaela Sims', "Amazon lobbyist"],
            ['Miguel Bezos', "Bezos stepfather"],
            ['minimum wage', "Amazon lobbying item"],
            ['Mitsubishi UFJ Trust', "Amazon shareholder"],
            ['Mitt Romney', "Bezos-supported politician"],
            ['Mobipocket', "Amazon acquisition"],
            ['mom & pop', "Amazon competitor"],
            ['mom and pop', "Amazon competitor"],
            ['monopolistic'],
            ['monopoly'],
            ['Montlake Romance', "Amazon brand label"],
            ['Morgan Stanley', "Amazon shareholder"],
            ['Mothercare', "Amazon business partner"],
            ['movies', "Amazon product category"],
            ['MP3', "Amazon product category"],
            ['music', "Amazon product category"],
            ['musical instruments', "Amazon product category"],
            ['Nasdaq'],
            ['Nash Holdings', "Bezos private company"],
            ['network'],
            ['Neuberger Berman', "Amazon shareholder"],
            ['New York State Common Retirement Fund', "Amazon shareholder"],
            ['Norges Bank', "Amazon shareholder"],
            ['Northern Trust', "Amazon shareholder"],
            ['office products', "Amazon product category"],
            ['office supplies', "Amazon product category"],
            ['Olympic Developments AG', "Amazon legal adversary party"],
            ['Organized Retail Crime Act', "Amazon lobbying item"],
            ['outdoor equipment', "Amazon product category"],
            ['outdoor gear', "Amazon product category"],
            ['Pandora', "The company, not the mythological figure. Amazon competitor"],
            ['patent', "Amazon lobbying item"],
            ['patio', "Amazon product category"],
            ['Patty Murray', "Bezos-supported politician"],
            ['Paul Misener', "Amazon lobbyist"],
            ['Penguin Group', "Amazon competitor"],
            ['Penguin Random House', "Amazon competitor"],
            ['personal care', "Amazon product category"],
            ['pet care', "Amazon product category"],
            ['pet supplies', "Amazon product category"],
            ['pets', "Amazon product category"],
            ['Pinzon', "Amazon brand label"],
            ['PlanetAll', "Amazon acquisition"],
            ['podcast'],
            ["Powell's", "Amazon competitor"],
            ["Powell's Books", "Amazon competitor"],
            ['powells.com', "Amazon competitor"],
            ['product safety', "Amazon lobbying item"],
            ['publisher'],
            ['publishing'],
            ['Pushbutton', "Amazon acquisition"],
            ['Quidsi', "Amazon acquisition"],
            ['Quidsi', "Amazon acquisition"],
            ['Random House', "Amazon competitor"],
            ['Reflexive Entertainment', "Amazon acquisition"],
            ['regulation'],
            ['regulatory'],
            ['Research Frontiers', "Amazon legal adversary party"],
            ['retail'],
            ['retailer'],
            ['Richard Branson', "potential Bezos business partner"],
            ['Rick Boucher', "Bezos-supported politician"],
            ['robot'],
            ['robotics'],
            ['Roger T. Fleming', "Amazon lobbyist"],
            ['Rovi Corporation', "Amazon legal adversary party"],
            ['Rovi Guides', "Amazon legal adversary party"],
            ['sales tax', "Amazon lobbying item"],
            ['Sales Tax Fairness and Simplification Act', "Amazon lobbying item"],
            ['Sandman', "Amazon business partner trademark"],
            ['Sands Capital Management', "Amazon shareholder"],
            ['Sears', "Amazon business partner"],
            ['SEC'],
            ['Securities and Exchange Commission'],
            ['server'],
            ['servers'],
            ['sewing', "Amazon product category"],
            ['SFA Systems', "Amazon legal adversary party"],
            ['Sharon Ringley Potter', "Amazon lobbyist"],
            ['Shelfari', "Amazon acquisition"],
            ['shipping'],
            ['shoes', "Amazon product category"],
            ['Shop@AOL', "Amazon business partner"],
            ['Shopbob.com', "Amazon acquisition"],
            ['Shopbop', "Amazon acquisition"],
            ['Simon & Schuster', "Amazon competitor"],
            ['Sleep, Zakaria', "Amazon shareholder"],
            ['smartphones', "Amazon product category"],
            ['SnapTell', "Amazon acquisition"],
            ['software', "Amazon product category"],
            ['Sothebys', "Amazon competitor"],
            ['sporting equipment', "Amazon product category"],
            ['sporting goods', "Amazon product category"],
            ['sports equipment', "Amazon product category"],
            ['Spotify', "Amazon competitor"],
            ['Sprint', "Amazon business partner"],
            ['Sprint Nextel', "Amazon business partner"],
            ['State Street', "Amazon shareholder"],
            ['Steam', "The game platform, not the material state of heated water. Amazon competitor"],
            ['storefront'],
            ['streaming'],
            ['Sumitomo Mitsui Trust Holdings', "Amazon shareholder"],
            ['Superman', "Amazon business partner trademark"],
            ['T Rowe Price', "Amazon shareholder"],
            ['T-Mobile', "Amazon business partner"],
            ['tablet', "Glass and silicon, not stone"],
            ['Target', "The company, not the concept. Competitor, business partner"],
            ['tax avoidance'],
            ['taxation'],
            ['taxes'],
            ['Teachstreet', "Amazon acquisition"],
            ['technology', "Amazon product category"],
            ['Ted Jorgensen', "Bezos father"],
            ['Telebuyer', "Amazon legal adversary party"],
            ['telecommunications', "Amazon lobbying item"],
            ['television', "Amazon product category"],
            ['temp'],
            ['temporary employee'],
            ['temporary employment'],
            ['The Book Depository', "Amazon acquisition"],
            ['the cloud'],
            ['The Strand', "Amazon competitor"],
            ['the Web'],
            ['Thomas & Mercer', "Amazon brand label"],
            ['Thomas and Mercer', "Amazon brand label"],
            ['TIAA-Cref', "Amazon shareholder"],
            ['Timex', "Amazon business partner"],
            ['Todd Thorpe', "Amazon lobbyist"],
            ['tools', "Amazon product category"],
            ['Toronto Dominion Bank', "Amazon shareholder"],
            ['Touchco', "Amazon acquisition"],
            ['toys', "Amazon product category"],
            ['Toys R Us', "Amazon competitor"],
            ['ToysRUs', "Amazon competitor"],
            ['ToysRUs.com', "Amazon competitor"],
            ['trademark', "Amazon lobbying item"],
            ['transportation', "Amazon lobbying item"],
            ['Trustees of Boston University', "Amazon legal adversary party"],
            ['TV'],
            ['TV Guide', "Amazon legal adversary party"],
            ['UBS', "Amazon shareholder"],
            ['United Video Properties', "Amazon legal adversary party"],
            ['utensils', "Amazon product category"],
            ['Valve', "The company, not the thing. Amazon competitor"],
            ['Verizon', "Amazon business partner"],
            ['video', "Amazon product category"],
            ['video game', "Amazon product category"],
            ['video games', "Amazon product category"],
            ['Vine.com', "Amazon subsidiary"],
            ['Virgin Galactic', "potential Bezos business partner"],
            ['Virgin Group', "potential Bezos business partner"],
            ['Waddell & Reed', "Amazon shareholder"],
            ['Wag.com', "Amazon acquisition"],
            ['wages', "Amazon lobbying item"],
            ['Wal-mart', "competitor"],
            ['Walker Digital', "Amazon legal adversary party"],
            ['Walmart', "competitor"],
            ['warehouse'],
            ['warehousing'],
            ['Washington Post'],
            ['Washington United for Marriage', "Bezos-supported political campaign"],
            ['watches', "Amazon product category"],
            ['Watchmen', "Amazon business partner trademark"],
            ['Web host'],
            ['Wellington Management', "Amazon shareholder"],
            ['Wells Fargo', "Amazon shareholder"],
            ['Winslow Capital Management', "Amazon shareholder"],
            ['wireless'],
            ['Woot', "Amazon acquisition"],
            ['work rules'],
            ['workers comp'],
            ["workers' comp"],
            ["workers' compensation"],
            ['working conditions'],
            ['workplace injury'],
            ['workplace theft'],
            ['World Wide Web'],
            ['Yap', "Amazon acquisition"],
            ['YoYo.com', "Amazon acquisition"],
            ['Zachary Williams', "Amazon lobbyist"],
            ['Zappos', "Amazon acquisition"],
            ['Zentralstelle für private Überspielungsrechte', "Amazon legal adversary party"],
            ['ZPU', "Amazon legal adversary party"]
	],
	wordsLen = words.length,
	idx;

    function addEvent(elem, eventType, handler) {
        if (elem.addEventListener) {
            elem.addEventListener (eventType, handler, false);
        } else if (elem.attachEvent) {
            handler = function (e) {
                var target = (typeof e.target === 'undefined') ? e.srcElement : e.target;

                handler.call(target, { 'target' : target });
            };
            elem.attachEvent ('on' + eventType, handler);
        } else {
            return false;
        }
    };	

	var popup = {
		add : function (element, notes, idx) {
			var popup;

			popup = document.createElement("div");
			popup.id = "jargonepopup-" + (idx + 1);
			popup.className = "jargonepopup";
			document.body.appendChild(popup);
			popup.innerHTML = notes;
			popup.style.left = element.getBoundingClientRect().left + 'px';
			popup.style.top = element.getBoundingClientRect().top + 20 + 'px';
			popup.style.visibility = 'visible';
			element.setAttribute('aria-describedby', popup.id);
			this.current.idx = (idx + 1);
			this.current.element = element;
		},
		remove : function () {
			var popup = document.getElementById("jargonepopup-" + this.current.idx);

			if (popup) {
				document.body.removeChild(popup);
				this.current.element.removeAttribute('aria-describedby');
				this.current.idx = null;
				this.current.element = null;
			}
		},
		current : {
			idx : null,
			element : null
		}
	};

	var popupEvt = (function () {
		var openIdx = null,
			focusedWord = null;

		return (function (e) {
			var element = e.target,
				term;

			if (!element.className || !element.className.match(/jargonehighlight/)) { return; }

			if ((openIdx !== null) || (e.type === 'focusout')) {
				popup.remove();
				focusedElement = null;
			} else {
				term = element.firstChild.nodeValue.toLowerCase();
				for (idx = 0; idx < wordsLen; idx++) {
					if (term.match(new RegExp(words[idx][0])) && words[idx][1]) {
						// clicks give focus so use it for capturing both events
						// focus is retained by elements when scrolling clears their popup so use clicks as backup
						if (e.type === 'click') {
							if ((focusedWord === element) && (popup.current.element === null)) {
								popup.add(element, words[idx][1], idx);
							}
						} else { // focusin
							focusedWord = element;
							popup.add(element, words[idx][1], idx);
						}
					}
				}
			}

			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		});
	}());

    // From http://james.padolsey.com/javascript/find-and-replace-text-with-javascript/
    function findAndReplace(searchText, replacement, searchNode) {
        if (!searchText || typeof replacement === 'undefined') {
            // Throw error here if you want...
            return;
        }
        var regex = typeof searchText === 'string' ?
                    new RegExp(searchText, 'g') : searchText,
            childNodes = (searchNode || document.body).childNodes,
            cnLength = childNodes.length,
            excludes = 'html,head,style,title,link,meta,script,object,iframe';
        while (cnLength--) {
            var currentNode = childNodes[cnLength];
            if (currentNode.nodeType === 1 &&
                (excludes + ',').indexOf(currentNode.nodeName.toLowerCase() + ',') === -1) {
                arguments.callee(searchText, replacement, currentNode);
            }
            if (currentNode.nodeType !== 3 || !regex.test(currentNode.data) ) {
                continue;
            }
            var parent = currentNode.parentNode,
                frag = (function(){
                    var html = currentNode.data.replace(regex, replacement),
                        wrap = document.createElement('div'),
                        frag = document.createDocumentFragment();
                    wrap.innerHTML = html;
                    while (wrap.firstChild) {
                        frag.appendChild(wrap.firstChild);
                    }
                    return frag;
                })();
            parent.insertBefore(frag, currentNode);
            parent.removeChild(currentNode);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".jargonehighlight { background-color: #FFFF88 !important; color: black; } .jargonehasnotes { cursor: help; border-bottom:1px dashed !important; } .jargonepopup { position: fixed; z-index: 1000 !important; visibility: hidden; background-color: #FFFFCC; color: black; border: solid silver 1px; margin: 5px; padding: 6px;} ";
    document.getElementsByTagName("head")[0].appendChild(css);

	for (idx = 0; idx < wordsLen; idx++) { // for each word
		var pattern = '\\b' + words[idx][0].replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        if (pattern.slice(-1) != '.') {
            pattern = pattern + '\\b';
        }
        var regex = new RegExp('(' + pattern + ')', 'ig');
    
		if (words[idx].length > 0 && words[idx][1] != undefined) {
          findAndReplace( regex, '<span class="jargonehighlight jargonehasnotes" tabindex="0">$1<\/span>');
        } else { // only use jargonehasnotes class if the entry has associated notes
          findAndReplace( regex, '<span class="jargonehighlight" tabindex="0">$1<\/span>');
        }
	}
	addEvent(document, 'focusin', popupEvt);
	addEvent(document, 'focusout', popupEvt);
	addEvent(document, 'click', popupEvt);
	addEvent(document, 'scroll', function () { popup.remove(); });
})();

$(function() {
  
  /* New test Suite RSS Feeds */
  describe('RSS Feeds', function() {
    /** Test #1
    * Test to make sure that the allFeeds variable has been defined
    *   and ensures it has a URL defined and that the URL
    *   is not empty.
    **/
    it('Feeds container is defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /** Test #2
    * Test that loops through each feed in the allFeeds object
    *   and ensures it has a URL defined and that the URL
    *   is not empty.
    **/
    it('URLs are defined and not empty', function() {
      allFeeds.forEach( feed => {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
      });
    });

    /** Test #3
    * Test that loops through each feed in the allFeeds object
    *   and ensures it has a name defined and that the name
    *   is not empty.
    **/
    it('Names are defined and not empty', function() {
      allFeeds.forEach( feed => {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
      });
    });
  }); /* end of the "RSS Feeds" Suite */

  /* New test Suite The Menu */
  describe('The Menu', function() {
    /** Test #4
    * Test that ensures the menu element is hidden by default.
    **/
    it('Side menu hidden by default', function() {
      const body = document.body;
          expect(body.classList.contains('menu-hidden')).toBe(true);
          //expect(body.className).toBe('menu-hidden');
    });

    /** Test #5
    * Test that ensures the menu changes visibility when
    *   the menu icon is clicked.
    **/
    it('The menu icon behaves as expected', function() {
      const body = document.body;
      const menuIcon = body.querySelector('.menu-icon-link');
      /* Simulate a 1st click to check if the menu acts removing the class*/
          menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
      /* Simulate a 2nd click to check if the menu acts adding the class*/
          menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
    });
  }); /* end of the "The Menu" Suite */

  /* New test Suite Initial Entries */
  describe('Initial Entries', function() {
    /** Test # 6
    * Test that ensures when the loadFeed function is called and completes its
    *   work, there is at least a single .entry element within the .feed
    *   container.
    **/
    let entryCheck;
    beforeEach(function(done) {
        loadFeed(0, function() {
          entryCheck = document.body.querySelectorAll('.feed .entry').length;
          done();
        });
    });
    it('There is a single entry in the container', function(done) {
      expect(entryCheck).toBeGreaterThan(0);
      done();
    });
  }); /* end of the "Initial Entries" Suite */

  /* New test Suite New Feed Selection */
  describe('New Feed Selection', function() {
    /** Test # 7
    * Test that ensures when a new feed is loaded by the loadFeed function
    *   that the content actually changes.
    **/
    let feedOne;
    let feedTwo;

    beforeEach(function(done){
      loadFeed(0, function () {
        feedOne = document.querySelector('.feed').innerHTML;
        done();
      });
    });

    it('New feed is loaded', function(done) {
      loadFeed(1, function(){
        feedTwo = document.querySelector('.feed').innerHTML;
        expect(feedTwo).not.toBe(feedOne);
        done();
      });
    });
  }); /* end of the "New Feed Selection" Suite */

}());

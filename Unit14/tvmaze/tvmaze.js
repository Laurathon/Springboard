/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */

      const $searchString = $("#search-query");
      const no_image = "https://tinyurl.com/tv-missing";
      
      async function searchShows(query) {
        // TODO: Make an ajax request to the searchShows api.  Remove
        // hard coded data.
      
        const res = await axios.get("http://api.tvmaze.com/search/shows", {
          params: {
            q: query,
          },
        });
      
        let shows = res.data.map((result) => {
          let show = result.show;
          return {
            id: show.id,
            name: show.name,
            summary: show.summary,
            image: show.image ? show.image.medium : no_image,
            runtime: show.runtime ? show.runtime : "no information",
            rating: show.rating.average === null ? 0 : show.rating,
          };
        });
      
        return shows;
      }
      
      /** Populate shows list:
       *     - given list of shows, add shows to DOM
       */
      
      function populateShows(shows) {
        const $showsList = $("#shows-list");
        $showsList.empty();
      
        for (let show of shows) {
          let $item = $(
            `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
               <div class="card" data-show-id="${show.id}">
                 <div class="card-body">
                   <h5 class="card-title">${show.name}</h5>
                   <img class="card-img-top" src=${show.image}>
                   <p class="card-text">Rating: ${show.rating.average}</p>
                   <p class="card-text">Runtime: ${show.runtime}</p>
                   <p class="card-text">${show.summary}</p>
                   <button id="episodeId" type="button" class="btn btn-secondary episodeId">Episodes</button>
                  
                 </div>
               </div>
             </div>
            `
          );
      
          $showsList.append($item);
        }
      }
      
      /** Handle search form submission:
       *    - hide episodes area
       *    - get list of matching shows and show in shows list
       */
      //After text is submitted, grab the value, Call Search Shows with the query string
      // then call populate shows which will place them in the dom.
      
      $("#search-form").on("submit", async function handleSearch(evt) {
        evt.preventDefault();
      
        let query = $("#search-query").val();
        if (!query) return;
      
        $("#episodes-area").hide();
        $("#exampleModal").hide();
      
        let shows = await searchShows(query);
      
        populateShows(shows);
      });
      
      /** Given a show ID, return list of episodes:
       *      { id, name, season, number }
       */
      
      async function getEpisodes(id) {
        // TODO: get episodes from tvmaze
        //       you can get this by making GET request to
        //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes
        // TODO: return array-of-episode-info, as described in docstring above
      
        let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
      
        let episodes = res.data.map((episode) => ({
          id: episode.id,
          name: episode.name,
          season: episode.season,
          number: episode.number,
        }));
        return episodes;
      }
      
      //Put Episodes in separate li in the dom. Place that in episodes area already defined in the html
      
      function populateEpisodes(episodes) {
        const $episodeList = $("#episodes-ul");
        $episodeList.empty();
      
        for (let episode of episodes) {
          let $item = $(
            `<li> ${episode.name}
            (season ${episode.season}, Episode: ${episode.number})
            </li>`
          );
      
          //put the items (li's) under ul in episode list
          $episodeList.append($item);
        }
      
        $("#exampleModal").show();
        $("#episodes-area").show();
      }
      
      function createModal() {
        let $episodesArea = $("#episodes-area");
        $episodesArea.html(
          `<div class="modal " id="exampleModal" tabindex="-1" role="dialog">
         <div class="modal-dialog" role="document">
           <div class="modal-content bg-success text-white id="modal-Area"">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Episode & Season</h5>           
            </div>
             <div class="modal-body">
            <ul id="episodes-ul">
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light modalButton" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
      </div>`
        );
      }
      
      /* when you click on the episodes button, the id from populateShow is passed 
      here. The id was stored in a property in the above function so we grab that.
       Then call the getEpisodes, with the show id as the parameter. Make an axios to call to the 
      new episodes endpoint which returns a list of episodes. Call function populateepisodes, which places the 
      episodes in the dom in an li */
      
      $("#shows-list").on("click", ".episodeId", async function handleSearch(evt) {
        evt.preventDefault();
        let showId = $(evt.target).closest(".Show").data("show-id");
        let episodes = await getEpisodes(showId);
        createModal();
        populateEpisodes(episodes);
      });
      
      $("#episodes-area").on("click", function (evt) {
        evt.preventDefault();
        $("#exampleModal").hide();
      });
      
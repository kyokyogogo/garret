/**
 * Receive user's choice in Hitokuiiwa's room.
 */

 	window.onload = function(){

 		update_hitokuiiwa_room.init_room();
 		$("body").on("click",".room-door", function (event) {
			update_hitokuiiwa_room.update_room(event.target.value);
		});
 	}

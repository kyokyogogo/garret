/**
 * Receive user's choice in Hitokuiiwa's room.
 */

 	window.onload = function(){

 		update_hitokuiiwa_room.init_room();
 		update_hitokuiiwa_room.init_info_card();

 		$("body").on("click",".room-door", function (event) {
			update_hitokuiiwa_room.update_room(event.target.value);
		});

		$("body").on("click",".main-contents-bottom-restart", function(){
			update_hitokuiiwa_room.init_room();
		})
 	}

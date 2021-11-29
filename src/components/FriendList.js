import React from 'react';
//import { Icon } from '@iconify/react';
import { FcLike, FcLikePlaceholder, FcFullTrash } from "react-icons/fc";

function FriendList({ data, index, addFavourite, deleteFriend }) {
    return (
        <div>
             <div className="to-do-item">
                <span className="name">
                {data.name}
                </span>
                <span class="actions">
                    <span>
                        {data.favourite ? 
                            <FcLike style={{ fontSize:20, marginRight:10 }} /> 
                            :
                            <FcLikePlaceholder onClick={() => addFavourite(index)} style={{ fontSize:20, marginRight:10 }}/>
                        }
                        
                        <FcFullTrash onClick={() => deleteFriend(index)}  style={{ fontSize:20, marginRight:10 }} />
                    </span>
                </span>
            </div>
        </div>
    );
}

export default FriendList;
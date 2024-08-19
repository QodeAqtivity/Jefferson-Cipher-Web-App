import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useAuthContext } from '../hooks/useAuthContext'; 
import { useCaesarCiphersContext } from '../hooks/useCaesarsCipherContext';
import { useJeffersonCiphersContext } from '../hooks/useJeffersonCiphersContext';


const Thread = () => {
    const { cipherType, cipherID } = useParams();
    const { user, dispatch: authDispatch } = useAuthContext();
    const [parent, setParent] = useState();
    const { caesarCiphers, dispatch: caesarDispatch } = useCaesarCiphersContext();

    useEffect(() => {
        const sample = async () => {
            const parentResponse = await fetch(`/api/${cipherType}/${cipherID}`);
            const parentJson = await parentResponse.json();
            
            if (parentResponse.ok) { //valid response
                setParent(parentJson);

                let commentsResponse;

                if (user) {
                    commentsResponse = await fetch(`/api/${cipherType}`, { 
                        headers: {
                            'Authorization': `Bearer ${user.token}`
                        }
                    });
                } else {
                    commentsResponse = await fetch(`/api/${cipherType}/public`);
                }

                const commentsJson = await commentsResponse.json();

                if (cipherType == 'caesar-cipher') {
                    caesarDispatch({type: 'SET_CAESAR_CIPHERS', payload: commentsJson});
                } else if (cipherType == 'jefferson-cipher') {
                    console.log('jeffciph');
                } else {
                    console.log('Not yet implemented');
                }
            } else {
                console.log('Parents REsponse not ok');
                if (json.error == 'Request is not authorized (Invalid JWT)') {
                    // clear global auth state and JWT in local storage
                    authDispatch({type: 'LOGOUT'});
                    localStorage.removeItem('user');
                }
            }
        };
    
        sample()
    }, [user]);
    
    

    return (
        <div>
            {
                parent &&
                <div>
                    <div className="border border-solid rounded-lg border-green-500 p-4 w-full mb-5 mr-96 flex justify-between">
                        <h2>Message (Encrypted): {parent.encrypted}</h2>
                        
                        {
                            (user && user.userID === parent.user_id) ? (
                                <div className='flex flex-col'>
                                    <span 
                                        class="material-symbols-outlined"
                                        onClick={(event) => handleDelete(event)}
                                    >
                                        delete
                                    </span>
                                    <span 
                                        class='material-symbols-outlined'
                                        onClick={(event) => handleEdit(event)}
                                    >
                                        edit
                                    </span>
                                </div>
                            ) : (
                                <span 
                                    class="material-symbols-outlined"
                                    onClick={(event) => handleReport(event)}
                                >
                                    warning
                                </span> 
                            )
                        }   
                    </div>
                        {
                            caesarCiphers && 
                            // code for gathering comments
                            // comments are not the parent, have the parent as the parent, have is_comment to be true (redundant)
                            caesarCiphers.filter((caesarCipher) => ((caesarCipher._id !== cipherID) && (caesarCipher.parent === cipherID) && (caesarCipher.is_comment === true))).map((caesarCipher) => (
                                <div className="border border-solid rounded-log border-green-500 my-2">
                                    <h3>{caesarCipher.encrypted}</h3>
                                    {
                                        (user && user.userID == caesarCipher.user_id) ? 
                                        (
                                            <span
                                                class="material-symbols-outlined"
                                            >
                                                delete
                                            </span>
                                        ) : (
                                            <span 
                                                class="material-symbols-outlined"
                                                onClick={(event) => handleReport(event)}
                                            >
                                                warning
                                            </span> 
                                        )
                                    }
                                </div>                            
                            ))    
                        }
                </div>
            }
        </div>
    );
};

export default Thread;
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory )) return;
        setCategories([ newCategory, ...categories  ]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input para manipularlo */}
            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {/* listado de Gif */}
                { 
                    categories.map( (category) => (
                            <GifGrid 
                            // la key no se especifica como prompts pero react asume que se debe definir
                            key={ category }
                            category={ category }
                            />
                        ))
                }

        </>
    )
}
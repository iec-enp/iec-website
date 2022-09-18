import React from 'react';
import Carousel from 'react-elastic-carousel'
import ArtricleCard from './article-card';

function NosArticles({latestPosts}) {
    const breakPoints =[ { width: 1, itemsToShow: 1.25, itemsToScroll: 1},
        { width: 450, itemsToShow: 1.6 , itemsToScroll: 1},
        { width: 600, itemsToShow: 2.25 , itemsToScroll: 1},
        { width: 887, itemsToShow: 2.5 , itemsToScroll: 1},
        
      ]

    return (
        
            <Carousel pagination={false} breakPoints={breakPoints}  >
            {latestPosts.map(post => (
              <ArtricleCard
                key={post.slug}
                image={post.backdrop_path}
                title={post.title}
                href={post.slug}
                description={post.description}
                date={post.date}
              />
            ))}

            </Carousel>
            
        
    );
}

export default NosArticles;
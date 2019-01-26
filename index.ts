import {FeedItem, FeedParser, FeedSource} from '../index.d';

const heise: FeedParser = {
    name: 'heise online',
    urls: [{url: 'https://www.heise.de/rss/heise.rdf'}],
    parse: (feed: any): FeedSource => {
        const items: Array<FeedItem> = [];
        feed.items.forEach((item: any) => {
            items.push({
                title: item.title,
                description: item.contentSnippet,
                link: item.link,
                categories: [],
                date: item.isoDate
            });
        });
        return {
            name: feed.title,
            description: feed.description,
            language: feed.language,
            link: feed.link,
            feed: items
        };
    }
};

export default heise;
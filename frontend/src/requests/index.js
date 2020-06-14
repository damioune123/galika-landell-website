import DirectusSDK from "@directus/sdk-js";
const SpriteSvg = "/static/img/sprite.svg";
class AjaxRequests {

    directusClient;

    init = async () => {
        this.directusClient = new DirectusSDK({
            project: "api",
            url: process.env.DIRECTUS_API_URL,
            token: process.env.DIRECTUS_TOKEN
        });
    };

    // API REQUESTS

    getHomes = async ()=> {
        const { data } = await this.directusClient.getItems("homes", {fields: "*, translations.*, img.data.*"});
        return data.reduce((homes, home)=>{
            homes.push({
                img: process.env.DIRECTUS_PUBLIC_URL+home.img.data.thumbnails[5].relative_url,
                alt: home.alt_img,
                amountRooms: home.amount_rooms,
                surface: home.surface,
                price: home.price,
                title: home.translations[0].title,
                location: home.translations[0].location,
            });
            return homes;
        }, []);
    };

    getRealtors = async ()=> {
        const { data } = await this.directusClient.getItems("realtors", {fields: "*, img.data.*"});
        return data.map(realtor=>({
                img: process.env.DIRECTUS_PUBLIC_URL+realtor.img.data.thumbnails[6].relative_url,
                alt: realtor.alt_img,
                fullName: realtor.fullname,
                sold: realtor.amount_houses_sold
        }));
    };

    getGalleryItems = async ()=> {
        const { data } = await this.directusClient.getItems("gallery_items", {fields: "*, img.data.*"});
        return data.map(galleryItem=> ({img: process.env.DIRECTUS_PUBLIC_URL+galleryItem.img.data.thumbnails[5].relative_url}));
    };

    getMetaData = async ()=> {
        const [
            headerMetaData,
            realtorMetaData,
            homeMetaData,
            featuresMetaData,
            storyMetaData
        ] = await Promise.all([
            this.getHeaderMetaData(),
            this.getRealtorsMetaData(),
            this.getHomesMetaData(),
            this.getFeaturesMetaData(),
            this.getStoriesMetaData()
        ]);
        return {
            headerMetaData,
            realtorMetaData,
            homeMetaData,
            featuresMetaData,
            storyMetaData
        };
    };

    getHeaderMetaData = async ()=> {
        const { data } = await this.directusClient.getItems(
            "header_metadata",
            {fields: "*, logo_img.data.*, translations.*, seen_on_logos.img.data.*, seen_on_logos.alt_img"}
            );
        const raw = data[0];
        return  {
            logoImg: process.env.DIRECTUS_PUBLIC_URL+raw.logo_img.data.thumbnails[6].relative_url,
            logoAlt: raw.logo_alt,
            seenOnLogos: raw.seen_on_logos.map(seenOnLogo => ({
                img: process.env.DIRECTUS_PUBLIC_URL+seenOnLogo.img.data.thumbnails[6].relative_url,
                alt: seenOnLogo.alt_img,
            })),
            heading3: raw.translations[0].heading_3,
            heading1: raw.translations[0].heading_1,
            btnText: raw.translations[0].btn_text,
            seenOnText: raw.translations[0].seen_on_text,
        };
    };
    getRealtorsMetaData = async ()=> {
        const { data } = await this.directusClient.getItems(
            "realtors_metadata",
            {fields: "*, translations.*"}
            );
        const raw = data[0];
        return  {
            housesSoldText: raw.translations[0].houses_sold_text,
        };
    };
    getHomesMetaData = async ()=> {
        const {data} = await this.directusClient.getItems(
            "homes_metadata",
            {fields: "*, translations.*"}
        );
        const raw = data[0];
        return {
            heartFullIcon: SpriteSvg + raw.heart_icon_hlink,
            mapPinIcon: SpriteSvg + raw.map_pin_icon_hlink,
            profileMaleIcon: SpriteSvg + raw.profile_male_icon_hlink,
            expandIcon: SpriteSvg + raw.expand_icon_hlink,
            keyIcon: SpriteSvg + raw.key_icon_hlink,
            btnText: raw.translations[0].btn_text,
        };
    };
    getFeaturesMetaData = async ()=> {
        const {data} = await this.directusClient.getItems(
            "features_metadata",
            {fields: "*, features.translations.*, features.*"}
        );
        const raw = data[0];
        return {
            features: raw.features.map(feature =>({
                icon: SpriteSvg + feature.icon_hlink,
                title: feature.translations[0].title,
                description: feature.translations[0].description
            }))
        };
    };
    getStoriesMetaData = async ()=> {
        const {data} = await this.directusClient.getItems(
            "stories_metadata",
            {fields: "*, img_1.data.url, img_2.data.*, translations.*"}
        );
        const raw = data[0];
        return {
            title: raw.translations[0].title,
            subtitle: raw.translations[0].subtitle,
            quote: raw.translations[0].quote,
            btnText: raw.translations[0].btn_text,
            img1: process.env.DIRECTUS_PUBLIC_URL+raw.img_1.data.thumbnails[5].relative_url,
            alt1: raw.alt_1,
            img2: process.env.DIRECTUS_PUBLIC_URL+raw.img_2.data.thumbnails[5].relative_url,
            alt2: raw.alt_2
        };
    };
}
const ajaxRequest = new AjaxRequests();
ajaxRequest.init();
export default ajaxRequest;



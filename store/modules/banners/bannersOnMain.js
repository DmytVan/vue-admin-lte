import { fetchBannersOnMainJson, getBannersOnMain } from "../../../src/api/banners";

const state = () => ({
    data: [],
    rotateSpeed: '5s',
    nextId: 0,
    isLoading: false,
    error: null
});

const mutations =  {
    addNewBannerInMain(state) {
        const newBanner = {
            photo: '',
            file: null,
            url: '',
            text: '',
            id: ++state.nextId
        };
        state.data.push(newBanner)
    },
    deleteBannerInMain(state, index) {
        state.data.splice(index,1)
    },
    changeTextInMain(state, {index, text}) {
        state.data[index].text = text;
    },
    changeUrlInMain(state, {index, url}) {
        state.data[index].url = url;
    },
    changeFileInMain(state, {index, file}) {
        state.data[index].file = file;
    },
    changePhotoInMain(state, {index, photo}) {
        state.data[index].photo = photo;
    },
    changeRotateSpeed(state, speed) {
        state.rotateSpeed = speed;
    },
    setStateBannersOnMain(state, newState) {
        Object.assign(state, newState);
        state.isLoading = false;
    },
    loadingBannersOnMain(state) {
        state.isLoading = true;
    },
    errorBannersOnMain(state, error) {
        state.isLoading = false;
        state.error = error;
    }
};


const actions = {
    changePhotoInMain({ commit }, {index, file}) {
        const reader = new FileReader();
        reader.onload = function(e) {
            commit('changePhotoInMain', {index, photo: e.target.result})
        };
        reader.readAsDataURL(file);
    },
    async fetchBannersInMain({  state, commit }) {
        commit('loadingBannersOnMain');
        const result = await fetchBannersOnMainJson({...state, data: state.data.filter(banner => banner.photo)});
        if (result.error) {
            commit('errorBannersOnMain', result.error)
            return;
        }
        commit('setStateBannersOnMain', result)
    },
    async getBannersInMain( { commit } ) {
        commit('loadingBannersOnMain');
        const result = await getBannersOnMain();
        if (result.error) {
            commit('errorBannersOnMain', result.error)
            return;
        }
        commit('setStateBannersOnMain', result)
    }
}

export default {
    state,
    mutations,
    actions,
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        projects: JSON.parse(localStorage.getItem('projects') || '[]'),
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
        datesCreated: JSON.parse(localStorage.getItem('datesCreated') || '[]'),
        today: new Date()
    },
    mutations: {
        addProject (state, project) {
            state.projects.push(project)
        },
        saveProjects (state) {
            localStorage.setItem('projects', JSON.stringify(state.projects))
        },
        addTask (state, task) {
            state.tasks.push(task)
        },
        saveTasks (state) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        saveDatesCreated (state) {
            localStorage.setItem('datesCreated', JSON.stringify(state.datesCreated))
        }
    },
    actions: {
        addProject ({ commit }, project) {
            commit('addProject', project)
        },
        saveProjects ({ commit }) {
            commit('saveProjects')
        },
        addTask ({ commit }, task) {
            commit('addTask', task)
        },
        saveTasks ({ commit }) {
            commit('saveTasks')
        },
        saveDatesCreated ({ commit }) {
            commit('saveDatesCreated')
        }
    }
})
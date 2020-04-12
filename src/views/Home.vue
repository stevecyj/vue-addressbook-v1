<template>
    <div class="page">
        <h1 class="text-center">連絡資訊</h1>
        <b-button-toolbar>
            <b-button @click="openAddModal()">新增連絡人</b-button>
            <!-- <b-button @click="getAllContacts()">Refresh</b-button> -->
        </b-button-toolbar>
        <br />
        <b-table-simple responsive>
            <b-thead>
                <b-tr>
                    <b-th>姓名</b-th>
                    <b-th>電話</b-th>
                    <b-th>電子信箱</b-th>
                    <b-th>地址</b-th>
                    <b-th>操作</b-th>
                    <b-th>動作</b-th>
                    <b-th><b-button>編輯</b-button></b-th>
                    <b-th><b-button>刪除</b-button></b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="c in contacts" :key="c.id">
                    <b-td>{{ c.firstName }}</b-td>
                    <b-td>{{ c.lastName }}</b-td>
                    <b-td
                        >{{ c.addressLineOne }}, {{ c.city }}, {{ c.region }},
                        {{ c.country }}, {{ c.postalCode }}</b-td
                    >
                    <b-td>{{ c.phone }}</b-td>
                    <b-td>{{ c.email }}</b-td>
                    <b-td>{{ c.age }}</b-td>
                    <b-td>
                        <b-button @click="openEditModal(c)">Edit</b-button>
                    </b-td>
                    <b-td>
                        <b-button @click="deleteOneContact(c.id)"
                            >Delete</b-button
                        >
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <b-modal id="add-modal" title="新增連絡人" hide-footer>
            <ContactForm
                @saved="closeModal()"
                @cancelled="closeModal()"
                :edit="false"
            ></ContactForm>
        </b-modal>
        <b-modal id="edit-modal" title="Edit Contact" hide-footer>
            <ContactForm
                @saved="closeModal()"
                @cancelled="closeModal()"
                :edit="true"
                :contact="selectedContact"
            ></ContactForm>
        </b-modal>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { requestsMixin } from '@/mixins/requestsMixin';
import ContactForm from '@/components/ContactForm';
export default {
    name: 'home',
    mixins: [requestsMixin],
    components: {
        ContactForm,
    },
    computed: {
        contacts() {
            return this.$store.state.contacts;
        },
    },
    beforeMount() {
        this.getAllContacts();
    },
    data() {
        return {
            selectedContact: {},
        };
    },
    methods: {
        openAddModal() {
            this.$bvModal.show('add-modal');
        },
        openEditModal(contact) {
            this.$bvModal.show('edit-modal');
            this.selectedContact = contact;
        },
        closeModal() {
            this.$bvModal.hide('add-modal');
            this.$bvModal.hide('edit-modal');
            this.selectedContact = {};
        },
        async deleteOneContact(id) {
            await this.deleteContact(id);
            this.getAllContacts();
        },
        async getAllContacts() {
            const response = await this.getContacts();
            this.$store.commit('setContacts', response.data);
        },
    },
};
</script>
<style scoped>
#add-button {
    margin-bottom: 20px;
}
</style>

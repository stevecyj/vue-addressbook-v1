<template>
    <div class="page">
        <h1 class="text-center">連絡資訊</h1>
        <b-button-toolbar style="justify-content: flex-end;">
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
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="c in contacts" :key="c.id">
                    <b-td>{{ c.name }}</b-td>
                    <b-td>{{ c.phone }}</b-td>
                    <b-td>{{ c.email }}</b-td>
                    <b-td>{{ c.address }}</b-td>

                    <b-td>
                        <b-button @click="openEditModal(c)">編輯</b-button>
                    </b-td>
                    <b-td>
                        <b-button @click="deleteOneContact(c.id)"
                            >刪除</b-button
                        >
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <b-modal id="add-modal" title="新增連絡人" size="xl" hide-footer>
            <ContactForm
                @saved="closeModal()"
                @cancelled="closeModal()"
                :edit="false"
            ></ContactForm>
        </b-modal>
        <b-modal id="edit-modal" title="編輯連絡人" size="xl" hide-footer>
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
            this.$store.commit('setContacts', response.data.data);
        },
    },
};
</script>
<style scoped>
#add-button {
    margin-bottom: 20px;
}
</style>

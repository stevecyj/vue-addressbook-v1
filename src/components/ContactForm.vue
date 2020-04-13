<template>
    <b-container>
        <ValidationObserver ref="observer" v-slot="{ invalid }">
            <b-form @submit.prevent="onSubmit" novalidate>
                <b-row>
                    <b-col>
                        <b-form-group label="姓名">
                            <ValidationProvider
                                name="name"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.name"
                                    required
                                    placeholder="中文姓名"
                                    name="name"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫姓名</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="英文姓名">
                            <ValidationProvider
                                name="ename"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.ename"
                                    required
                                    placeholder="英文姓名"
                                    name="ename"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >英文姓名 is
                                    requied.</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="電話">
                            <ValidationProvider
                                name="phone"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.phone"
                                    required
                                    placeholder="電話"
                                    name="phone"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫電話</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="電子信箱">
                            <ValidationProvider
                                name="email"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.email"
                                    required
                                    placeholder="name@expample.com"
                                    name="email"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫電子信箱</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="性別">
                            <ValidationProvider
                                name="sex"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.sex"
                                    required
                                    placeholder="性別"
                                    name="sex"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫性別</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="居住城市">
                            <ValidationProvider
                                name="city"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.city"
                                    required
                                    placeholder="居住城市"
                                    name="city"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫居住城市</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="鄉鎮市區">
                            <ValidationProvider
                                name="township"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.township"
                                    required
                                    placeholder="鄉鎮市區"
                                    name="township"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫鄉鎮市區</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="郵遞區號">
                            <ValidationProvider
                                name="postcode"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.postcode"
                                    required
                                    placeholder="郵遞區號"
                                    name="postcode"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫郵遞區號</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="詳細地址">
                            <ValidationProvider
                                name="address"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.address"
                                    required
                                    placeholder="詳細地址"
                                    name="address"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫詳細地址</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="備註">
                            <ValidationProvider
                                name="notes"
                                rules="required"
                                v-slot="{ errors }"
                            >
                                <b-form-input
                                    type="text"
                                    :state="errors.length == 0"
                                    v-model="form.notes"
                                    required
                                    placeholder="備註"
                                    name="notes"
                                ></b-form-input>
                                <b-form-invalid-feedback
                                    :state="errors.length == 0"
                                    >請填寫備註</b-form-invalid-feedback
                                >
                            </ValidationProvider>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-button
                    type="submit"
                    variant="primary"
                    style="margin-right: 10px;"
                    >儲存</b-button
                >
                <b-button type="reset" variant="danger" @click="cancel()"
                    >取消</b-button
                >
            </b-form>
        </ValidationObserver>
    </b-container>
</template>
<script>
import { COUNTRIES } from '@/helpers/exports';
import { requestsMixin } from '@/mixins/requestsMixin';
export default {
    name: 'ContactForm',
    mixins: [requestsMixin],
    props: {
        edit: Boolean,
        contact: Object,
    },
    methods: {
        async onSubmit() {
            const isValid = await this.$refs.observer.validate();
            if (!isValid) {
                return;
            }
            if (this.edit) {
                await this.editContact(this.form);
            } else {
                await this.addContact(this.form);
            }
            const response = await this.getContacts();
            this.$store.commit('setContacts', response.data.data);
            this.$emit('saved');
        },
        cancel() {
            this.$emit('cancelled');
        },
    },
    data() {
        return {
            form: {},
            countries: COUNTRIES.map(c => ({ value: c.name, text: c.name })),
        };
    },
    watch: {
        contact: {
            handler(c) {
                this.form = c || {};
            },
            deep: true,
            immediate: true,
        },
    },
};
</script>

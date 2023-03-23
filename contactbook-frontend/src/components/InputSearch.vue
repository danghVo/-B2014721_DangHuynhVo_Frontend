<template>
    <div class="input-group">
        <input type="text" 
               class="form-control" 
               placeholder="Nhập thông tin cần tìm" 
               :value="modelValue" 
               @input="updateModelValue" 
               @keypress.enter="submit"
               name="" id="">

        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="submit">
                <i class="fa-solid fa-magnifying-glass"></i>Tìm kiếm  
            </button>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        modelValue: {
            type:String, default: ""
        },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit(e) {
            this.$emit("submit");
        }

    }
}
</script>

<style>
</style>